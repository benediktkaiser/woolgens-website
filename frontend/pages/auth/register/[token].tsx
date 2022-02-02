import {useRouter} from "next/router";
import NavbarLayout from "../../../layout/NavbarLayout";
import PasswordInput from "../../../components/common/forms/PasswordInput";
import BaseInputWithLabel from "../../../components/common/forms/BaseInputWithLabel";
import {BaseButton} from "../../../components/common/BaseButton";
import BasicCard from "../../../components/common/cards/BasicCard";
import {useState} from "react";

const RegisterPage = () => {
    const router = useRouter()
    const {token} = router.query

    const [email, setEmail] = useState(undefined)
    const [password, setPassword] = useState(undefined)
    const [repeatPasswordError, setRepeatPasswordError] = useState(undefined)

    const checkRepeatPassword = (value) => {
        if (value !== password) {
            setRepeatPasswordError("The passwords so not match!")
        } else {
            setRepeatPasswordError(undefined)
        }
    }

    const seo = {
        title: "Register",
        description: "Welcome to the WoolGens homepage! Here you can find stats, news and communicate with other community members!"
    }

    return (
        <NavbarLayout seo={seo}>
            <BasicCard>
                <div className="container flex flex-col gap-5 my-4 mx-auto">
                    <h1 className="py-5 text-3xl text-center text-gray-200 border-t-2 border-b-2 border-dark-light">
                        Register
                    </h1>
                    <BaseInputWithLabel label="Username" disabled defaultValue={token} />
                    <BaseInputWithLabel
                        label="Email"
                        onChange={(event) => setEmail(event.target.value)}
                    />
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
                        <BaseButton type="danger" className="mr-4">
                            Cancel
                        </BaseButton>
                        <BaseButton type="success">
                            Register
                        </BaseButton>
                    </div>
                </div>
            </BasicCard>
        </NavbarLayout>
    )
}

export default RegisterPage
