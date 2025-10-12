import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ScrollToTopButton from "../components/ScrolltoTop";
import { useState, useEffect } from "react";
import '../styles/Home.css';


function Home() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
        <div className={"home" + (isMobile ? "" : "")}>
            <Header />
            <main className="main-content">
                <Hero />
                <About />
                <Skills />
                <Projects />
                <ScrollToTopButton />
            </main>
            <Footer />
        </div>
    );
}

export default Home;