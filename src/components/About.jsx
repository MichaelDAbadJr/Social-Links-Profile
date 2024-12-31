const About = ({ name, location, about }) => {
  return (
    <>
      <div className="hero-name-location">
        <p>{name}</p>
        <p>{location}</p>
      </div>
      <p className="hero-about">{about}</p>
    </>
  );
};

export default About;
