import '../styles/Header.css';
import { FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";

function Header() {
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };
    const [menuOpen, setMenuOpen] = useState(false);
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "auto";
    }, [menuOpen]);
    return (
        <>
            <div className={`body-overlay ${menuOpen ? "active" : ""}`} onClick={() => setMenuOpen(false)}></div>
            <header className="header" style={{ color: 'white' }}>
                <div className="container w-100">
                    <div className="nav-inner-container">
                        <div className="logo silver-text shiny" onClick={() => scrollToSection("home")}>MK</div>
                        <div>
                            <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
                                {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                            </div>
                            <nav className={`nav-links-container ${menuOpen ? "open" : ""}`}>
                                <ul className="nav-links">
                                    <li className='no-cursor' onClick={() => { scrollToSection("aboutme"); setMenuOpen(false); }}><a>About</a></li>
                                    <li className='no-cursor' onClick={() => { scrollToSection("skills"); setMenuOpen(false); }}><a>Skills</a></li>
                                    <li className='no-cursor' onClick={() => { scrollToSection("projects"); setMenuOpen(false); }}><a>Projects</a></li>
                                    <li className='no-cursor' onClick={() => { scrollToSection("contact"); setMenuOpen(false); }}><a>Contact</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;