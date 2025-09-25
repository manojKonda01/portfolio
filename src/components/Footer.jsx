import '../styles/Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer white-header">
      <div className="container">
        <p style={{ margin: 0 }}>&copy; {currentYear} Manoj Konda. All rights reserved.</p>
        <div className="social-links">
          <a href="#" aria-label="GitHub">GitHub</a>
          <a href="#" aria-label="LinkedIn">LinkedIn</a>
          <a href="#" aria-label="Twitter">Twitter</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;