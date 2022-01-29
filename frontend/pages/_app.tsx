import '../styles/global.css'
import '../plugins/persistent-store.plugin'
import 'react-toastify/dist/ReactToastify.css';

import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";
import {useEffect, useState} from "react";
import authStore from "../stores/AuthStore";
import Toast from "../plugins/toast.plugin";

import {AiOutlineLoading3Quarters} from "react-icons/ai"

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
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (authStore.token) {
      authStore.tokenAuth(authStore.token).then(() => {
        setLoading(false)
      })
    } else {
      setLoading(false)
    }
  }, [])

  if (loading) {
    return (
        <div className="flex flex-col justify-center items-center mx-auto w-full h-screen">
          <AiOutlineLoading3Quarters size="4rem" className="animate-spin" />
          <div className="mt-8 text-center">
            <h1 className="w-full text-4xl font-bold">
              Preparing site
            </h1>
            <h2 className="text-gray-300">
              This should not take too long!
            </h2>
          </div>
        </div>
    )
  }

  return (
      <div>
          <Component {...pageProps} />
          <Toast />
      </div>
  )
}

export default App
