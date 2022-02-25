import '../styles/global.css'
import '../styles/toast.css'
import '../plugins/persistent-store.plugin'

import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";
import {useEffect} from "react";
import authStore from "../stores/AuthStore";
import Toast from "../plugins/toast.plugin";

import LoginModal from "../components/LoginModal";
import RegisterModal from "../components/RegisterModal";
import informationStore from "../stores/InformationStore";
import {toast} from "react-toastify";

const progress = new ProgressBar({
  size: 2,
  color: "#F05454",
  className: "bar-of-progress",
  delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

export default function App({ Component, pageProps }: AppPropsWithLayout) {

    useEffect(() => {
        if (authStore.token) {
            authStore.tokenAuth(authStore.token).catch(() => {
                toast.error("Your token has expired. Please login again.")
            })
        } else {
            authStore.setLoading(false)
        }
        informationStore.updateData().catch(error => console.error(error))
    }, [])

    // Use the layout defined at the page level, if available
    const getLayout = Component.getLayout ?? ((page) => page)

    return getLayout(
        <>
            <Component {...pageProps} />
            <Toast />
            <LoginModal />
            <RegisterModal />
        </>
    )
}
