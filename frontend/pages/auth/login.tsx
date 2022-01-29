import NavbarLayout from "../../layout/NavbarLayout";
import PasswordInput from "../../components/common/forms/PasswordInput";
import BaseInputWithLabel from "../../components/common/forms/BaseInputWithLabel";
import {BaseButton} from "../../components/common/BaseButton";
import BasicCard from "../../components/common/cards/BasicCard";
import {useEffect, useState} from "react";
import authStore from "../../stores/AuthStore";
import {toast} from "react-toastify";
import {useRouter} from "next/router";
import {observer} from "mobx-react-lite";

const RegisterPage = observer(() => {
    const [username, setUsername] = useState(undefined)
    const [password, setPassword] = useState(undefined)
    const router = useRouter()

    useEffect(() => {
        if (authStore.webUser) {
            router.push("/").then(() => {
                return;
            })
        }
    }, [authStore.webUser])

    const login = (username, password) => {
        if (!username || !password) {
            toast("Please enter a username and password.")
            return;
        }
        authStore.basicAuth(username, password).then(result => {
            if (!result) {
                toast("The username or password were incorrect. Please try again.")
                return;
            }
            router.push("/").then(() => {
                toast("You were logged in!")
            })
        })
    }

    return (
        <NavbarLayout>
            <BasicCard>
                <div className="container flex flex-col gap-5 my-4 mx-auto">
                    <h1 className="py-5 text-3xl text-gray-200">
                        Login
                    </h1>
                    <BaseInputWithLabel
                        label="Username"
                        onChange={(event) => setUsername(event.target.value)}
                    />
                    <PasswordInput
                        label="Password"
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <div className="flex justify-end mt-2">
                        <BaseButton type="primary" className="mr-4" onClick={() => authStore.getPersistedData()}>
                            Register
                        </BaseButton>
                        <BaseButton onClick={() => login(username, password)} type="success">
                            Login
                        </BaseButton>
                    </div>
                </div>
            </BasicCard>
        </NavbarLayout>
    )
})

export default RegisterPage
