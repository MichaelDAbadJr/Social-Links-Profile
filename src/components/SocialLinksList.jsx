import SocialLink from "./SocialLink";

const SocialLinksList = ({links}) => {
    return links.map(link => <SocialLink key={link} link={link}/>);
}

export default SocialLinksList