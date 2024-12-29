import './App.css';
import heroImg from '../assets/images/avatar-jessica.jpeg';

function App() {
  return (
    <div className="social-media-card-container">
      <div className="social-media-card">
        <div className="hero-img">
          <img src={heroImg} alt="heroImg" />
        </div>
        <div className="hero-name-location">
          <p>Jessica Randall</p>
          <p>London, United Kingdom</p>
        </div>
        <p className="hero-about">{`"Front-end developer and avid reader."`}</p>
        <div className="social-media-links-container">
          <div className="social-media-links-button">GitHub</div>
          <div className="social-media-links-button">Frontend Mentor</div>
          <div className="social-media-links-button">LinkedIn</div>
          <div className="social-media-links-button">Twitter</div>
          <div className="social-media-links-button">Instagram</div>
        </div>
      </div>
    </div>
  );
}

export default App;
