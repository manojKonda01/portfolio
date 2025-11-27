import ShinyCard from "./ShinyCard";
import '../styles/About.css';
import { useState, useEffect } from "react";

const About = () => {
    const currentYear = new Date().getFullYear();
    const cardsStyle = {
        width: '10rem',
        height: '8rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    if (isMobile) {
        cardsStyle.width = '8rem';
        cardsStyle.height = '6rem';
        if (window.innerWidth < 400) {
            cardsStyle.width = '6rem';
            cardsStyle.height = '4rem';
        }
    }
    return (
        <section id="aboutme" className="aboutme-section">
            <div className="container d-flex justify-content-center align-items-center flex-column">
                <div className="aboutme-title-container d-flex justify-content-center align-items-center">
                    <div className="aboutme-title silver-text">From Pixels to Pipelines — I Build It All</div>
                </div>
                <div className="aboutme-content-container d-flex justify-content-center align-items-center">
                    <div className="aboutme-right d-flex justify-content-center align-items-start">
                        <ShinyCard style={{ marginBottom: '20px' }}>
                            <div className="aboutme-right-title silver-text">
                                Engineering Experiences End-to-End
                            </div>
                            <p className='aboutme-content'>I build at the intersection of data, cloud, and user experience. From sleek, responsive websites to scalable full-stack applications and data pipelines, I craft systems that work seamlessly and look intentional.</p>
                            <p className='aboutme-content'>From shaping APIs and managing databases to optimizing cloud workflows, I craft solutions that are reliable, scalable, and impactful. Working with me means transforming concepts into systems that not only work, but thrive.</p>
                        </ShinyCard>
                    </div>
                    <div className="aboutme-left">
                        <div className="aboutme-cards">
                            <ShinyCard style={cardsStyle}>
                                <div className="experience-card d-flex justify-content-center flex-column align-items-center">
                                    <div className="d-flex justify-content-center align-items-flex-end w-100">
                                        <div className="experience-number">{currentYear - 2021}<span>+</span></div>
                                        <div className="experience-year-label">years</div>
                                    </div>
                                    <div className="experience-label">experience</div>
                                </div>
                            </ShinyCard>
                            <ShinyCard style={cardsStyle}>
                                <div className="experience-card d-flex justify-content-center flex-column align-items-center">
                                    <div className="d-flex justify-content-center align-items-flex-end w-100">
                                        <div className="experience-number">10<span>+</span></div>
                                    </div>
                                    <div className="experience-label">websites</div>
                                </div>
                            </ShinyCard>
                            <ShinyCard style={cardsStyle}>
                                <div className="experience-card d-flex justify-content-center flex-column align-items-center">
                                    <div className="d-flex justify-content-center align-items-flex-end w-100">
                                        <div className="experience-number">3</div>
                                    </div>
                                    <div className="experience-label">webapps</div>
                                </div>
                            </ShinyCard>
                            <ShinyCard style={cardsStyle}>
                                <div className="experience-card d-flex justify-content-center flex-column align-items-center">
                                    <div className="d-flex justify-content-center align-items-flex-end w-100">
                                        <div className="experience-number">4</div>
                                    </div>
                                    <div className="experience-label">data migrations
                                    </div>
                                </div>
                            </ShinyCard>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About;