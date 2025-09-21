// src/components/Hero.jsx
import '../styles/Hero.css';
import HeroPortrait from './HeroPortrait';
import useTypewriter from './TypeWriter';
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

function HeroIntro() {
    const { text, cursor } = useTypewriter(
        ['Software Engineer', 'Web Developer', 'Data Engineer', 'Full-Stack Developer'],
        100, // typing speed
        60,  // deleting speed
        3600 // delay before delete
    );

    return (
        <div className="hero-intro">
            <div className="hero-intro-text">
                I am a <span className='hero-role'>{text}</span>
                <span className="cursor">{cursor}</span>
            </div>
        </div>
    );
}

function Hero() {
    const icons = [
        { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/yourprofile" },
        { icon: <FaGithub />, link: "https://github.com/yourprofile" },
        { icon: <FaTwitter />, link: "https://twitter.com/yourprofile" },
      ];
    return (
        <section className="hero black-header">
            <div className="hero-left">
                <div className="hero-title">Manoj Konda</div>
                <HeroIntro />
            </div>
            <div className="hero-right">
                <HeroPortrait />
                <div className="hero-social-icons-container d-flex align-items-center justify-content-center">
                    {icons.map((item, idx) => (
                        <a
                            key={idx}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-icon"
                        >
                            {item.icon}
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Hero;
