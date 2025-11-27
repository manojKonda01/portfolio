import '../styles/Footer.css';
import { FaLinkedin, FaGithub, FaTwitter, FaPhone, FaEnvelope } from "react-icons/fa";
import { useEffect, useState } from 'react';

const Footer = () => {
  const [icons, setIcon] = useState([
    { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/manoj-konda/", show: true },
    { icon: <FaGithub />, link: "https://github.com/manojKonda01", show: true },
    { icon: <FaTwitter />, link: "https://x.com/Manoj_Konda_", show: true },
    { icon: <FaPhone />, link: "tel:+13126871440", show: false },
    { icon: <FaEnvelope />, link: "mailto:mosesmanoj01@gmail.com", show: false },
  ]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobile){
      setIcon(prevIcons => prevIcons.map(icon => {
        if (icon.icon.type === FaPhone || icon.icon.type === FaEnvelope) {
          return { ...icon, show: true };
        }
        return { ...icon, show: true };
      }));
    }
    else{
      setIcon(prevIcons => prevIcons.map(icon => {
        if (icon.icon.type === FaPhone || icon.icon.type === FaEnvelope) {
          return { ...icon, show: false };
        }
        return { ...icon, show: true };
      }));
    }
  }, [isMobile]);
  return (
    <footer className="footer" id='contact'>
      <div className="footer-container">
        {/* Logo / Branding */}
        <div className="footer-brand subcontainer">
          <h2 className="logo silver-text" onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }}>MK</h2>
          <p className="tagline">Crafting Data & Web Experiences</p>
        </div>
        {/* Contact Info */}
        <div className="footer-contact d-flex flex-column justify-content-center">
          <p>Email: <a className='contact-info' href="mailto:mosesmanoj01@gmail.com">mosesmanoj01@gmail.com</a></p>
          <p>Phone: <a className='contact-info' href="tel:+1234567890">+1 (312) 687-1440</a></p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Manoj Konda. All rights reserved.</p>
        {/* Social */}
        <div className="footer-social subcontainer">
          <div className="hero-social-icons-container d-flex align-items-center justify-content-center mt-0">
            {
              icons.map((item, idx) => (
                <a
                  key={idx}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon no-cursor"
                  style={{ display: item.show ? 'flex' : 'none' }}
                >
                  {item.icon}
                </a>
              ))
            }
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
