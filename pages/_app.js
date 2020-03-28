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
const loadingBar = document.querySelector(".loading-bar");

export { ThemeContext };
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

Router.events.on("routeChangeStart", () =>
    loadingBar.classList.add("loading-bar--is-loading")
);
Router.events.on("routeChangeComplete", () =>
    loadingBar.classList.remove("loading-bar--is-loading")
);
Router.events.on("routeChangeError", () =>
    loadingBar.classList.remove("loading-bar--is-loading")
);
