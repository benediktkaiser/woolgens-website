import React, {FC, useState} from "react";
import authStore from "../stores/AuthStore";
import {toast} from "react-toastify";
import BaseInputWithLabel from "./common/forms/BaseInputWithLabel";
import PasswordInput from "./common/forms/PasswordInput";
import BaseButton from "./common/BaseButton";
import {AiOutlineLoading3Quarters} from "react-icons/ai"

interface LoginComponentProps {
    showRegisterButton?: boolean
}

const LoginComponent: FC<LoginComponentProps> = ({showRegisterButton = true}) => {
    const [username, setUsername] = useState(undefined)
    const [password, setPassword] = useState(undefined)
    const [loading, setLoading] = useState(false)

    const _login = (username, password): Promise<boolean> => {
        return new Promise(async (resolve, reject) => {
            setLoading(true)
            const result = await authStore.basicAuth(username, password)
            setLoading(false)
            if (!username || !password) {
                reject("Please enter a username and a password.")
            }
            if (!result) {
                reject("Your username or password was incorrect.")
            } else {
                authStore.closeLoginModal()
                resolve(true)
            }
        })
    }

    const login = (username, password) => {
        toast.promise(
            _login(username, password),
            {
                pending: `Attempting to log you in. Please wait a moment`,
                success: `You were successfully logged in. Welcome back!`,
                error: {
                    render({data}){
                        return data
                    }
                }
            }
        ).catch(error => console.error(error))
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
                    {showRegisterButton && (
                        <BaseButton type="dark" onClick={() => {
                            authStore.toggleLoginModal()

                            setTimeout(() => {
                                authStore.toggleRegisterModal()
                            }, 500)
                        }}>
                            Register
                        </BaseButton>
                    )}
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
