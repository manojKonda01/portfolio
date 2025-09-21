import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import '../styles/Home.css';

function Home() {
  return (
    <div className="home">
      <Header />
      <main className="main-content">
        <Hero/>
      </main>
      <Footer />
    </div>
  );
}

export default Home;