import NavbarLayout from "../../layout/NavbarLayout";
import React, {useEffect} from "react";
import {observer} from "mobx-react-lite";
import LoginComponent from "../../components/LoginComponent";
import authStore from "../../stores/AuthStore";
import {useRouter} from "next/router";

const LoginPage: NextPageWithLayout = observer(() => {
    const router = useRouter()

    useEffect(() => {
        if (authStore.user) {
            router.push("/").then(() => {
                return;
            })
        }
    }, [authStore.user]) // eslint-disable-line

    return <div className="mx-auto max-w-lg"><LoginComponent /></div>
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
