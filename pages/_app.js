import { createContext, useState } from "react";
import Router from "next/router";
import "../configs/icons";

import Header from "../components/_globals/Header";
import Contact from "../components/_globals/Contact";
import Footer from "../components/_globals/Footer";
import mainStyling from "../styles/mainStyling";
import useComponentDidMount from "../components/_hooks/componentDidMount";
import LoadingBar from "../components/_globals/LoadingBar";
const ThemeContext = createContext(true);

Router.events.on("routeChangeStart", loadingStart);
Router.events.on("routeChangeComplete", loadingFinished);
Router.events.on("routeChangeError", loadingFinished);

export default function App({ Component, pageProps }) {
    const [isLightTheme, setTheme] = useState(true);
    useComponentDidMount(() => {
        const localTheme =
            window.localStorage.getItem("theme") ||
            (window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
                ? "dark"
                : "light");

        setTheme(localTheme === "light");
    });

    return (
        <>
            <LoadingBar />
            <ThemeContext.Provider value={{ isLightTheme, setTheme }}>
                <Header />
            </ThemeContext.Provider>

            <Component {...pageProps} />

            <Contact />
            <Footer />
            <style jsx>{mainStyling}</style>
        </>
    );
}

export { ThemeContext };

function loadingStart() {
    const loadingBar = document.querySelector(".loading-bar");
    loadingBar.classList.add("loading-bar--is-loading");
}

function loadingFinished() {
    const loadingBar = document.querySelector(".loading-bar");
    if (loadingBar) loadingBar.classList.remove("loading-bar--is-loading");
}
