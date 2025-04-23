import "./App.css";
import linkedinIcon from "./assets/linkedin.jpg";
import instagramIcon from "./assets/instagram.jpg";
import peakTewLogo from "./assets/logo.jpg";
import peopleImage from "./assets/background.jpg";
import mascotImage from "./assets/mascot.png";

function App() {
  return (
    <div className="container">
      <div className="social-icons">
        <a
          href="https://www.linkedin.com/company/peaktew/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
        </a>
        <a
          href="https://www.instagram.com/peaktew/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" className="social-icon" />
        </a>
      </div>

      <div className="logo">
        <img src={peakTewLogo} alt="PeakTew Logo" />
      </div>

      <h1 className="coming-soon-text">Coming Soon...</h1>

      <div className="full-width-background">
        <img src={peopleImage} alt="background" className="full-bg-image" />
        <img src={mascotImage} alt="Purple mascot" className="mascot-image" />
      </div>
    </div>
  );
}

export default App;
