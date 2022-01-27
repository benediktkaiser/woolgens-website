import {useRouter} from "next/router";

const RegisterPage = () => {
    const router = useRouter()
    const {token} = router.query

    return (
        <div>
            test - { token }
        </div>
    )
}

export default RegisterPage
