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
const LoggedInDataContext = createContext(null);
import { parse } from "cookie";

Router.events.on("routeChangeStart", loadingStart);
Router.events.on("routeChangeComplete", loadingFinished);
Router.events.on("routeChangeError", loadingFinished);

export default function App({ Component, pageProps }) {
    const [isLightTheme, setTheme] = useState(true);
    const [alert, modifyAlert] = useState({
        isVisible: false,
        props: { type: 1, children: "" },
    });

    const [isAuthenticated, setAuthenticatedTo] = useState(false);

    useComponentDidMount(() => {
        const localTheme =
            window.localStorage.getItem("theme") ||
            (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
                ? "dark"
                : "light");

        setTheme(localTheme === "light");

        // seteaza daca este autentificat bazat pe existenta cookie-ului pentru cand se viziteaza
        // site-ul, astfel, memorand faptul ca utilizatorul este logat
        // nu conteaza daca este sters cookie-ul de catre client pentru ca putem
        // verifica pe server daca este autentificat cu refreshToken-ul

        const cookies = document.cookie && parse(document.cookie);
        if (!isAuthenticated && cookies && cookies["_accessToken"]) setAuthenticatedTo(true);
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

            <LoggedInDataContext.Provider value={{ isAuthenticated, setAuthenticatedTo }}>
                <ShowAlertContext.Provider value={modifyAlert}>
                    <Component {...pageProps} />
                </ShowAlertContext.Provider>
            </LoggedInDataContext.Provider>

            <Contact />
            <Footer />
            <style jsx>{mainStyling}</style>
        </>
    );
}

export { ThemeContext, ShowAlertContext, LoggedInDataContext };

function loadingStart() {
    const loadingBar = document.querySelector(".loading-bar");
    loadingBar.classList.add("loading-bar--is-loading");
}

function loadingFinished() {
    const loadingBar = document.querySelector(".loading-bar");
    if (loadingBar) loadingBar.classList.remove("loading-bar--is-loading");
}
