import '../styles/Header.css';
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

function Header() {
    const [textColor, setTextColor] = useState("white");
    const navigate = useNavigate();
    return (
        <header className="header" style={{ color: textColor }}>
            <div className="container px-5 w-100">
                <div className="nav-inner-container d-flex justify-content-center align-items-center p-relative">
                    <div className="logo p-absolute l0 silver-text shiny" onClick={() => {navigate("/")}}>MK</div>
                    <div>
                        <nav>
                            <ul className="nav-links d-flex justify-content-center align-items-center">
                                <li><a href="#home">Home</a></li>
                                <li><a href="#about">About</a></li>
                                <li><a href="#projects">Projects</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;