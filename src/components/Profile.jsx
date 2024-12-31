import About from './About';
import SocialLinksList from './SocialLinksList';
import Hero from './Hero';

const Profile = ({ profileData }) => {
  return (
    <div className="social-media-card-container">
      {profileData.map(profile => {
        return (
          <div key={profile.name} className="social-media-card">
            <Hero heroImg={profile.heroImg} />
            <About
              name={profile.name}
              location={profile.location}
              about={profile.about}
            />
            <SocialLinksList links={profile.links} />
          </div>
        );
      })}
    </div>
  );
};

export default Profile;
