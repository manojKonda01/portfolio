import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer white-header">
      <div className="container">
        <p>&copy; 2025 My Portfolio. All rights reserved.</p>
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