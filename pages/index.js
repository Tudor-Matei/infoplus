import "../configs/icons";
import Header from "../components/globals/Header";
import Contact from "../components/globals/Contact";
import Footer from "../components/globals/Footer";

import Main from "../components/Home/Main";
import Perks from "../components/Home/Perks";
import mainStyling from "../styles/mainStyling";
export default function Index() {
    return (
        <>
            <Header />
            <Main />
            <Perks />
            <Contact />
            <Footer />
            <style jsx>{mainStyling}</style>
        </>
    );
}
