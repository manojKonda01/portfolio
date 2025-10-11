import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ScrollToTopButton from "../components/ScrolltoTop";
import '../styles/Home.css';


function Home() {
    return (
        <div className="home">
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