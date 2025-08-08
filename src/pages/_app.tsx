import "../styles/globals.css"
import type { AppProps } from "next/app"
import { axeAccessibilityReporter } from "@/utils/axeAccessibilityReporter"

axeAccessibilityReporter()

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
