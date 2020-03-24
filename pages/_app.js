import "../configs/icons";
import Header from "../components/globals/Header";
import Contact from "../components/globals/Contact";
import Footer from "../components/globals/Footer";
import mainStyling from "../styles/mainStyling";
import { createContext, useState } from "react";

const ThemeContext = createContext("light");

export default function App({ Component, pageProps }) {
    const [isLightTheme, setTheme] = useState(true);

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
