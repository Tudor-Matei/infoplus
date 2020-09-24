import { createContext, useState, useEffect, useReducer } from "react";
import Router from "next/router";
import useComponentDidMount from "../components/_hooks/componentDidMount";

import "../configs/icons";
import mainStyling from "../styles/mainStyling";

import Header from "../components/_globals/Header";
import Contact from "../components/_globals/Contact";
import Footer from "../components/_globals/Footer";

import AlertNotification from "../components/_globals/AlertNotification";
import LoadingBar from "../components/_globals/LoadingBar";
import { parse } from "cookie";
import Login from "../components/_globals/Login";
import DataPanel from "../components/_globals/DataPanel";

export const ThemeContext = createContext(true),
    ShowAlertContext = createContext(null),
    LoginModalHandler = createContext(null),
    ShowLoginContext = createContext(null),
    LoggedInDataContext = createContext(null),
    DataPanelContext = createContext(null);

Router.events.on("routeChangeStart", loadingStart);
Router.events.on("routeChangeComplete", loadingFinished);
Router.events.on("routeChangeError", loadingFinished);

export default function App({ Component, pageProps }) {
    const [alert, modifyAlert] = useState({
        isVisible: false,
        props: { type: 1, children: "" },
        customToggleHandler: null,
    });

    const [panelData, setPanelData] = useReducer((_, action) => action.value, "");

    const [isAuthenticated, setAuthenticatedTo] = useState(false);
    const [loginModalVisible, setLoginModalVisible] = useState(false);
    const showLoginModal = () => setLoginModalVisible(!loginModalVisible);

    useEffect(() => {
        // seteaza daca este autentificat bazat pe existenta cookie-ului pentru cand se viziteaza
        // site-ul, astfel, memorand faptul ca utilizatorul este logat
        // nu conteaza daca este sters cookie-ul de catre client pentru ca putem
        // verifica pe server daca este autentificat cu refreshToken-ul
        const cookies = document.cookie && parse(document.cookie);
        // TODO: rename setAuthenticatedTo, lol.
        if (!isAuthenticated && cookies && cookies["_accessToken"]) setAuthenticatedTo(true);
    }, [isAuthenticated]);
    // TODO: fix providers. own files. this is ugli
    return (
        <>
            {alert.isVisible && (
                <AlertNotification
                    type={alert.props.type}
                    alertToggleHandler={() => modifyAlert({ ...alert, isVisible: false })}
                    customToggleHandler={alert.customToggleHandler}
                >
                    {alert.props.children}
                </AlertNotification>
            )}
            <LoadingBar />
            <LoggedInDataContext.Provider value={{ isAuthenticated, setAuthenticatedTo }}>
                <ShowLoginContext.Provider value={showLoginModal}>
                    <ShowAlertContext.Provider value={modifyAlert}>
                        <Header />
                    </ShowAlertContext.Provider>
                </ShowLoginContext.Provider>
            </LoggedInDataContext.Provider>

            <LoggedInDataContext.Provider value={{ isAuthenticated, setAuthenticatedTo }}>
                <ShowAlertContext.Provider value={modifyAlert}>
                    <LoginModalHandler.Provider value={showLoginModal}>
                        {loginModalVisible && <Login />}
                    </LoginModalHandler.Provider>
                </ShowAlertContext.Provider>
            </LoggedInDataContext.Provider>

            <DataPanelContext.Provider value={setPanelData}>
                <LoggedInDataContext.Provider value={{ isAuthenticated, setAuthenticatedTo }}>
                    <ShowAlertContext.Provider value={modifyAlert}>
                        <ShowLoginContext.Provider value={showLoginModal}>
                            <Component {...pageProps} />
                        </ShowLoginContext.Provider>
                    </ShowAlertContext.Provider>
                </LoggedInDataContext.Provider>
            </DataPanelContext.Provider>

            <DataPanel onClick={() => setPanelData("")}>{panelData}</DataPanel>
            <Contact />
            <Footer />
            <style jsx>{mainStyling}</style>
        </>
    );
}

function loadingStart() {
    const loadingBar = document.querySelector(".loading-bar");
    loadingBar.classList.add("loading-bar--is-loading");
}

function loadingFinished() {
    const loadingBar = document.querySelector(".loading-bar");
    if (loadingBar) loadingBar.classList.remove("loading-bar--is-loading");
}
