import {useRouter} from "next/router";
import PasswordInput from "../../../components/common/forms/PasswordInput";
import {BaseButton} from "../../../components/common/BaseButton";
import React, {useEffect, useState} from "react";
import {getTemporaryToken, registerUserWithToken} from "../../../core/auth";
import {toast} from "react-toastify";
import authStore from "../../../stores/AuthStore";
import FullPageLayout from "../../../layout/FullPageLayout";
import Logo from "../../../components/common/Logo";
import Bust from "../../../components/common/Bust";
import SEO from "../../../components/SEO";

const RegisterPage: NextPageWithLayout = () => {
    const router = useRouter()
    const {id} = router.query

    const [password, setPassword] = useState(undefined)
    const [repeatPassword, setRepeatPassword] = useState(undefined)
    const [repeatPasswordError, setRepeatPasswordError] = useState(undefined)
    const [token, setToken] = useState<TemporaryToken>(undefined)

    const checkRepeatPassword = (value) => {
        if (value !== password) {
            setRepeatPasswordError("The passwords do not match!")
        } else {
            setRepeatPassword(value)
            setRepeatPasswordError(undefined)
        }
    }

    const register = () => {
        if (repeatPassword === password) {
            registerUserWithToken(token, password).then(result => {
                if (result) {
                    router.push("/").then(() => {
                        toast("You successfully registered!")
                        authStore.toggleLoginModal()
                    })
                    return;
                }
                toast.error("Something went wrong. Please try again!")
            })
        } else {
            setRepeatPasswordError("The passwords do not match!")
        }
    }

    useEffect(() => {
        if (id) {
            getTemporaryToken(id.toString()).then((result) => {
                setToken(result)
            })
        }
    }, [id])

    if (!token) {
        return (
            <div className="text-center">
                <SEO seo={{
                    title: "Register",
                    description: "Welcome to the Woolgens community! Here you can easily login and access your website account.",
                    imageSRC: "/seo/Login.jpg",
                }} />
                <h1 className="text-3xl">
                    This token was not found.
                </h1>
                <h2>
                    Please join the server and execute <span className="text-accent-300">/register</span> to create an account.
                </h2>
            </div>
        )
    }

    return (
        <div className="w-full">
            <SEO seo={{
                title: "Register",
                description: "Welcome to the Woolgens community! Here you can easily login and access your website account.",
                imageSRC: "/seo/Login.jpg",
            }} />
            <div className="flex flex-col mx-auto w-[700px]">
                <div className="mx-auto mb-2">
                    <Logo animated={true} height="200px" width="200px" />
                </div>
                <div className="mb-3 text-center text-shark-50">
                    <h1 className="text-3xl">
                        Hello <span className="text-accent-400">{token.data.name}!</span> You are almost done.
                    </h1>
                </div>
                <div className="flex overflow-hidden items-stretch rounded-lg">
                    <div
                        className="relative w-full bg-cover"
                        style={{
                             backgroundImage: 'url(/background/tree.jpeg)',
                         }}
                    >
                        <div className="absolute -bottom-2 left-0">
                            <Bust uuid={token.data.uuid} size={200} />
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 p-5 bg-shark-600 w-[900px]">
                        <PasswordInput
                            label="Password"
                            onChange={(event) => setPassword(event.target.value)}
                        />
                        <PasswordInput
                            label="Repeat Password"
                            onChange={(event) => checkRepeatPassword(event.target.value)}
                            error={repeatPasswordError}
                        />
                        <div className="flex justify-end mt-2">
                            <BaseButton type="success" onClick={() => register()}>
                                Register
                            </BaseButton>
                        </div>
                    </div>
                </div>
                <div className="h-32" />
            </div>
        </div>
    )
}

RegisterPage.getLayout = function getLayout(page) {
    return (
        <FullPageLayout>
            {page}
        </FullPageLayout>
    )
}

export default RegisterPage
