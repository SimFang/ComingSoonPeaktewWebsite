import "./App.css";
import linkedinIcon from "./assets/linkedin.jpg";
import instagramIcon from "./assets/instagram.jpg";
import tiktokIcon from "./assets/tiktok.jpg";
import peakTewLogo from "./assets/logo.jpg";
import peopleImage from "./assets/background.jpg";
import mascotImage from "./assets/mascot-rev.png";

function App() {
  return (
    <div className="container">
      <div className="social-icons">
        <div className="social-icon-container">
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
          <a
            href="https://www.tiktok.com/@peaktew"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={tiktokIcon} alt="Ticktok" className="social-icon" />
          </a>
        </div>
        <div className="logo">
          <img src={peakTewLogo} alt="PeakTew Logo" />
        </div>
      </div>

      <div className="stack-container">
        <p className="coming-text">COMING</p>
        <p className="soon-text">SOON</p>
        <img src={peopleImage} alt="background" className="full-bg-image" />
        <img src={mascotImage} alt="Purple mascot" className="mascot-image" />
        <div className="button-text">
          <p className="custom-text">Together, Unique In Our Own Way</p>
          <a href="https://www.linkedin.com/company/peaktew/">
            <button className="button-get-to">Get To Know Us</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
