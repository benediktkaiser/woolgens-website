import NavbarLayout from "../../layout/NavbarLayout";
import React, {useEffect} from "react";
import {observer} from "mobx-react-lite";
import LoginComponent from "../../components/LoginComponent";
import authStore from "../../stores/AuthStore";
import {useRouter} from "next/router";
import SEO from "../../components/SEO";

const LoginPage: NextPageWithLayout = observer(() => {
    const router = useRouter()

    useEffect(() => {
        if (authStore.user) {
            router.push("/").then(() => {
                return;
            })
        }
    }, [authStore.user]) // eslint-disable-line

    return (
        <div className="mx-auto max-w-lg">
            <SEO seo={{
                title: "Login",
                description: "Welcome to the Woolgens community! Here you can easily login and access your website account.",
                imageSRC: "/seo/Login.jpg",
            }} />
            <LoginComponent/>
        </div>
    )
})

LoginPage.getLayout = function getLayout(page) {
    return (
        <NavbarLayout>
            {page}
        </NavbarLayout>
    )
}

export default LoginPage
