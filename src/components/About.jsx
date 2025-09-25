import ShinyCard from "./ShinyCard";
import '../styles/About.css';

const About = () =>{
    const currentYear = new Date().getFullYear();
    return (
        <section id="about" className="section about-section">
            <div className="container d-flex justify-content-center align-items-center">
                <ShinyCard style={{ }}>
                    <div className="experience-card d-flex justify-content-center flex-column align-items-center">
                        <div className="d-flex justify-content-center align-items-flex-end w-100">
                            <div className="experience-number">{currentYear - 2021}<span>+</span></div>
                            <div className="experience-year-label">years</div>
                        </div>
                        <div className="experience-label">experience</div>
                    </div>
                </ShinyCard>
            </div>
        </section>
    )
}
export default About;