import "../configs/icons";
import Header from "../components/globals/Header";
import Contact from "../components/globals/Contact";
import Footer from "../components/globals/Footer";
import mainStyling from "../styles/mainStyling";
import { createContext, useState, useEffect, useRef } from "react";

const ThemeContext = createContext(true);

export default function App({ Component, pageProps }) {
    const [isLightTheme, setTheme] = useState(true);
    const mounted = useRef();
    useEffect(() => {
        if (!mounted.current) {
            mounted.current = true;
            const localTheme = window.localStorage.getItem("theme");
            setTheme(localTheme === "light");
        }
    });
    return (
        <>
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
