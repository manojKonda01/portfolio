// src/components/Hero.jsx
import '../styles/Hero.css';
import HeroPortrait from './HeroPortrait';
import useTypewriter from './TypeWriter';
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

function HeroIntro() {
    const heroRoles = ['Software Engineer.', 'Web Developer.', 'Data Engineer.', 'Full-Stack Developer.'];
    const descWords = ['develop websites that connect and inspire.', 'engineer full-stack applications that scale.', 'design data pipelines that move data with purpose.', 'manage databases and APIs that power modern apps.', 'maintain software that grows with your vision.']
    const { text, cursor } = useTypewriter(
        descWords,
        60, // typing speed 100
        20,  // deleting speed 60
        2400 // delay before delete 1800
    );

    return (
        <div className="hero-intro">
            <div className="hero-intro-text">
                {/* I am a <span className='hero-role'>{text}</span> */}
                I {text}
                <span className="cursor">{cursor}</span>
            </div>
        </div>
    );
}

function Hero() {
    const icons = [
        { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/manoj-konda/" },
        { icon: <FaGithub />, link: "https://github.com/manojKonda01" },
        { icon: <FaTwitter />, link: "https://x.com/Manoj_Konda_" },
    ];
    return (
        <>
            <section className="hero black-header">
                <div className="hero-left">
                    <div className="hero-title">Manoj Konda</div>
                    <div className="hero-subtitle">
                        <ul>
                            <li>Software Engineer</li>
                            <li>Full-Stack Developer</li>
                            <li>Data Engineer</li>
                        </ul>
                    </div>
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
                                className="social-icon no-cursor"
                            >
                                {item.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Hero;
