import { createContext, useState } from "react";
import Router from "next/router";
import "../configs/icons";

import Header from "../components/globals/Header";
import Contact from "../components/globals/Contact";
import Footer from "../components/globals/Footer";
import mainStyling from "../styles/mainStyling";
import useComponentDidMount from "../components/hooks/componentDidMount";
import LoadingBar from "../components/globals/LoadingBar";
const ThemeContext = createContext(true);

Router.events.on("routeChangeStart", loadingStart);
Router.events.on("routeChangeComplete", loadingFinished);
Router.events.on("routeChangeError", loadingFinished);

export default function App({ Component, pageProps }) {
    const [isLightTheme, setTheme] = useState(true);
    useComponentDidMount(() => {
        const localTheme = window.localStorage.getItem("theme") || "light";
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
    loadingBar.classList.remove("loading-bar--is-loading");
}
