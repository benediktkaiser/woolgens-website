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

const progress = new ProgressBar({
  size: 3,
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
            authStore.tokenAuth(authStore.token).catch(error => console.error(error))
        }
        informationStore.updateData().catch(error => console.error(error))
    }, [])

    // Use the layout defined at the page level, if available
    const getLayout = Component.getLayout ?? ((page) => page)

    return getLayout(
        <div>
            <Component {...pageProps} />
            <Toast />
            <LoginModal />
            <RegisterModal />
        </div>
    )
}
