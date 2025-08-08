import "../styles/globals.css"
import type { AppProps } from "next/app"
import { axeAccessibilityReporter } from "@/utils/axeAccessibilityReporter"
import { useEffect } from "react"

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    axeAccessibilityReporter()
  }, [])

  return <Component {...pageProps} />
}

export default MyApp
