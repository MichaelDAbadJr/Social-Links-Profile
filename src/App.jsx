import './App.css';
import socialLinksData from './data/social-links-data.json';
import Profile from './components/Profile';

function App() {
  return (
      <Profile profileData={socialLinksData} />
  );
}

export default App;
