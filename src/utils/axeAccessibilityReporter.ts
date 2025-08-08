export async function axeAccessibilityReporter() {
  if (process.env.NODE_ENV == "development") {
    const axe = (await import("@axe-core/react")).default
    const React = (await import("react")).default
    const ReactDOM = (await import("react-dom")).default

    axe(React, ReactDOM, 1000)
  }
}
