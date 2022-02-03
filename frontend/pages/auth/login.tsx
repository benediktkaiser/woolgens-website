import NavbarLayout from "../../layout/NavbarLayout";
import PasswordInput from "../../components/common/forms/PasswordInput";
import BaseInputWithLabel from "../../components/common/forms/BaseInputWithLabel";
import {BaseButton} from "../../components/common/BaseButton";
import React, {useEffect, useState} from "react";
import authStore from "../../stores/AuthStore";
import {toast} from "react-toastify";
import {useRouter} from "next/router";
import {observer} from "mobx-react-lite";
import CardWithImageHeader from "../../components/common/cards/CardWithImageHeader";

const LoginPage: NextPageWithLayout = observer(() => {
    const [username, setUsername] = useState(undefined)
    const [password, setPassword] = useState(undefined)
    const [error, setError] = useState(undefined)
    const router = useRouter()

    useEffect(() => {
        if (authStore.user) {
            router.push("/").then(() => {
                return;
            })
        }
    }, [authStore.user]) // eslint-disable-line

    const login = (username, password) => {
        setError(undefined)
        if (!username || !password) {
            setError("Please enter a username and password.")
            toast("Please enter a username and password.")
            return;
        }
        authStore.basicAuth(username, password).then(result => {
            if (!result) {
                toast("The username or password were incorrect. Please try again.")
                setError("The password or username is incorrect! Please try again.")
                return;
            }
            router.push("/").then(() => {
                toast("You were logged in!")
            })
        })
    }

    return (
        <div className="mx-auto max-w-lg">
            <CardWithImageHeader top={<div
                className="p-4 w-full h-full text-3xl font-bold text-center bg-gradient-to-l from-accent-600 to-accent-500 rounded-t-lg">Login</div>}>
                <div className="flex flex-col gap-5 my-4">
                    <BaseInputWithLabel
                        label="Username"
                        onChange={(event) => setUsername(event.target.value)}
                    />
                    <PasswordInput
                        label="Password"
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    {error && (
                        <p className="text-center text-red-300">
                            {error}
                        </p>
                    )}
                    <div className="flex flex-col gap-4 justify-end mt-2">
                        <BaseButton type="dark-active" onClick={() => authStore.getPersistedData()}>
                            Register
                        </BaseButton>
                        <BaseButton onClick={() => login(username, password)} type="success">
                            Login
                        </BaseButton>
                    </div>
                </div>
            </CardWithImageHeader>
        </div>
    )
})

LoginPage.getLayout = function getLayout(page) {
    const seo = {
        title: "Login",
        description: "Welcome to the WoolGens homepage! Here you can find stats, news and communicate with other community members!"
    }

    return (
        <NavbarLayout seo={seo}>
            {page}
        </NavbarLayout>
    )
}

export default LoginPage
