import NavbarLayout from "../../layout/NavbarLayout";
import PasswordInput from "../../components/common/forms/PasswordInput";
import BaseInputWithLabel from "../../components/common/forms/BaseInputWithLabel";
import {BaseButton} from "../../components/common/BaseButton";
import BasicCard from "../../components/common/cards/BasicCard";
import {useState} from "react";
import authStore from "../../stores/AuthStore";

const RegisterPage = () => {
    const [username, setUsername] = useState(undefined)
    const [password, setPassword] = useState(undefined)

    return (
        <NavbarLayout>
            <BasicCard>
                <div className="container flex flex-col gap-5 my-4 mx-auto">
                    <h1 className="py-5 text-3xl text-center text-gray-200 border-t-2 border-b-2 border-dark-light">
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
                        <BaseButton onClick={() => authStore.basicAuth(username, password)} type="success">
                            Login
                        </BaseButton>
                    </div>
                </div>
            </BasicCard>
        </NavbarLayout>
    )
}

export default RegisterPage
