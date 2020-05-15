import { createContext, useState } from "react";
import Router from "next/router";
import useComponentDidMount from "../components/_hooks/componentDidMount";

import "../configs/icons";
import mainStyling from "../styles/mainStyling";

import Header from "../components/_globals/Header";
import Contact from "../components/_globals/Contact";
import Footer from "../components/_globals/Footer";

import AlertNotification from "../components/_globals/AlertNotification";
import LoadingBar from "../components/_globals/LoadingBar";

const ThemeContext = createContext(true);
const ShowAlertContext = createContext(null);

Router.events.on("routeChangeStart", loadingStart);
Router.events.on("routeChangeComplete", loadingFinished);
Router.events.on("routeChangeError", loadingFinished);

export default function App({ Component, pageProps }) {
    const [isLightTheme, setTheme] = useState(true);
    useComponentDidMount(() => {
        const localTheme =
            window.localStorage.getItem("theme") ||
            (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
                ? "dark"
                : "light");

        setTheme(localTheme === "light");
    });

    const [alert, modifyAlert] = useState({
        isVisible: false,
        props: { type: 1, children: "" },
    });

    return (
        <>
            {alert.isVisible && (
                <AlertNotification
                    type={alert.props.type}
                    alertToggleHandler={() => modifyAlert({ ...alert, isVisible: false })}
                >
                    {alert.props.children}
                </AlertNotification>
            )}
            <LoadingBar />
            <ThemeContext.Provider value={{ isLightTheme, setTheme }}>
                <Header />
            </ThemeContext.Provider>

            <ShowAlertContext.Provider value={modifyAlert}>
                <Component {...pageProps} />
            </ShowAlertContext.Provider>

            <Contact />
            <Footer />
            <style jsx>{mainStyling}</style>
        </>
    );
}

export { ThemeContext, ShowAlertContext };

function loadingStart() {
    const loadingBar = document.querySelector(".loading-bar");
    loadingBar.classList.add("loading-bar--is-loading");
}

function loadingFinished() {
    const loadingBar = document.querySelector(".loading-bar");
    if (loadingBar) loadingBar.classList.remove("loading-bar--is-loading");
}
