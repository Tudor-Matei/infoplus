import { createContext, useState, useEffect, useReducer, useMemo } from "react";
import Router from "next/router";

import "../configs/icons";
import mainStyling from "../styles/mainStyling";

import Header from "../components/_globals/Header";
import Contact from "../components/_globals/Contact";
import Footer from "../components/_globals/Footer";

import AlertNotification from "../components/_globals/AlertNotification";
import RouteLoadingBar from "../components/_globals/RouteLoadingBar";
import { parse } from "cookie";
import Login from "../components/_globals/Login";
import DataPanel from "../components/_globals/DataPanel";
import { alertNotification } from "../components/_globals/reducers";

export const ThemeContext = createContext(true),
  ShowAlertContext = createContext(null),
  LoginModalHandler = createContext(null),
  ShowLoginContext = createContext(null),
  LoggedInDataContext = createContext(null),
  DataPanelContext = createContext(null);

Router.events.on("routeChangeStart", loadingStart);
Router.events.on("routeChangeComplete", loadingFinish);
Router.events.on("routeChangeError", loadingFinish);

export default function App({ Component, pageProps }) {
  const [alert, createAlert] = useReducer(alertNotification.reducer, alertNotification.initialState);

  const [panelData, setPanelData] = useReducer((_, action) => action.value, "");

  const [isAuthenticated, setAuthenticated] = useState(false);
  const [loginModalVisible, setLoginModalVisible] = useState(false);
  const showLoginModal = () => setLoginModalVisible(!loginModalVisible);

  useEffect(() => {
    // seteaza daca este autentificat bazat pe existenta cookie-ului pentru cand se viziteaza
    // site-ul, astfel, memorand faptul ca utilizatorul este logat
    // nu conteaza daca este sters cookie-ul de catre client pentru ca putem
    // verifica pe server daca este autentificat cu refreshToken-ul
    const cookies = document.cookie && parse(document.cookie);

    if (!isAuthenticated && cookies && cookies["_accessToken"]) setAuthenticated(true);
  }, [isAuthenticated]);

  return (
    <>
      {useMemo(
        () =>
          alert.isVisible && (
            <AlertNotification
              type={alert.ofType}
              closeAlert={() => createAlert({ ofType: "" })}
              onClose={alert.onClose}
            >
              {alert.saying}
            </AlertNotification>
          ),
        [alert.isVisible]
      )}
      <RouteLoadingBar />

      <LoggedInDataContext.Provider value={{ isAuthenticated, setAuthenticated }}>
        <ShowLoginContext.Provider value={showLoginModal}>
          <ShowAlertContext.Provider value={createAlert}>
            <Header />
          </ShowAlertContext.Provider>
        </ShowLoginContext.Provider>
      </LoggedInDataContext.Provider>

      <LoggedInDataContext.Provider value={{ isAuthenticated, setAuthenticated }}>
        <ShowAlertContext.Provider value={createAlert}>
          <LoginModalHandler.Provider value={showLoginModal}>
            {loginModalVisible && <Login />}
          </LoginModalHandler.Provider>
        </ShowAlertContext.Provider>
      </LoggedInDataContext.Provider>

      <DataPanelContext.Provider value={setPanelData}>
        <LoggedInDataContext.Provider value={{ isAuthenticated, setAuthenticated }}>
          <ShowAlertContext.Provider value={createAlert}>
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
  const loadingBar = document.getElementById("loading-bar");

  loadingBar.classList.remove("loading-bar--loaded");
  loadingBar.classList.add("loading-bar--is-loading");
}
function loadingFinish() {
  const loadingBar = document.getElementById("loading-bar");

  loadingBar.classList.add("loading-bar--loaded");
  loadingBar.classList.remove("loading-bar--is-loading");
}
