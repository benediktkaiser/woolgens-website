import React, {useState} from "react";
import authStore from "../stores/AuthStore";
import {toast} from "react-toastify";
import BaseInputWithLabel from "./common/forms/BaseInputWithLabel";
import PasswordInput from "./common/forms/PasswordInput";
import {BaseButton} from "./common/BaseButton";
import {AiOutlineLoading3Quarters} from "react-icons/ai"

const LoginComponent = () => {
    const [username, setUsername] = useState(undefined)
    const [password, setPassword] = useState(undefined)
    const [loading, setLoading] = useState(false)

    const login = (username, password) => {
        setLoading(true)
        if (!username || !password) {
            toast.error("Please enter a username and password.")
            setLoading(false)
            return;
        }
        authStore.basicAuth(username, password).then(result => {
            if (!result) {
                toast.error("The username or password were incorrect. Please try again.")
                setLoading(false)
                return;
            }
            setLoading(false)
            authStore.closeLoginModal()
            toast.success("You were successfully logged in!")
        })
    }

    return (
        <div className="bg-dark rounded-md shadow">
            <div
                className="p-4 w-full h-full text-3xl font-bold text-center bg-gradient-to-l from-accent-600 to-accent-500 rounded-t-lg">Login
            </div>
            <div className="flex relative flex-col gap-5 p-4">
                <BaseInputWithLabel
                    label="Username"
                    onChange={(event) => setUsername(event.target.value)}
                />
                <PasswordInput
                    label="Password"
                    onChange={(event) => setPassword(event.target.value)}
                />
                <div className="flex flex-col gap-4 justify-end m-2">
                    <BaseButton onClick={() => login(username, password)} type="success">
                        Login
                    </BaseButton>
                    <BaseButton type="dark" onClick={() => {
                        authStore.toggleLoginModal()

                        setTimeout(() => {
                            authStore.toggleRegisterModal()
                        }, 500)
                    }}>
                        Register
                    </BaseButton>
                </div>
                {loading && (
                    <div className="flex absolute top-0 left-0 flex-col justify-center w-full h-full text-center bg-dark/70">
                        <AiOutlineLoading3Quarters size="2rem" className="mx-auto animate-spin" />
                        <h1 className="my-2 text-xl">Logging in...</h1>
                    </div>
                )}
            </div>
        </div>
    )
}

export default LoginComponent
