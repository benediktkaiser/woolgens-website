import '../styles/global.css'
import '../plugins/persistent-store.plugin'

import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";
import {useEffect} from "react";
import authStore from "../stores/AuthStore";

const progress = new ProgressBar({
  size: 2,
  color: "#7c3aed",
  className: "bar-of-progress",
  delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

function App ({ Component, pageProps }) {

  useEffect(() => {
    if (authStore.token) {
      authStore.tokenAuth(authStore.token).then(() => {
        console.info(authStore.webUser)
      })
    }
  }, [])

  return <Component {...pageProps} />
}

export default App
