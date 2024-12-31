import './App.css';
import socialLinksData from './data/social-links.json';
import SocialLink from './components/SocialLink';
import Hero from './components/Hero';
import About from './components/About';

function App() {
  return (
    <div className="social-media-card-container">
      <div className="social-media-card">
        <Hero />
        <About/>
        {socialLinksData?.links.map(link => {
          return <SocialLink key={link} link={link} />;
        })}
      </div>
    </div>
  );
}

export default App;
