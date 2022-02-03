import React, {useState} from "react";
import authStore from "../stores/AuthStore";
import {toast} from "react-toastify";
import BaseInputWithLabel from "./common/forms/BaseInputWithLabel";
import PasswordInput from "./common/forms/PasswordInput";
import {BaseButton} from "./common/BaseButton";

const LoginComponent = () => {
    const [username, setUsername] = useState(undefined)
    const [password, setPassword] = useState(undefined)
    const [error, setError] = useState(undefined)

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
            authStore.closeLoginModal()
            toast("You were logged in!")
        })
    }

    return (
        <div className="bg-dark rounded-md shadow">
            <div
                className="p-4 w-full h-full text-3xl font-bold text-center bg-gradient-to-l from-accent-600 to-accent-500 rounded-t-lg">Login
            </div>
            <div className="flex flex-col gap-5 p-4 my-4">
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
        </div>
    )
}

export default LoginComponent
