import { ReactComponent as FacebookIcon } from "./../../../assets/images/facebook.svg";
import { ReactComponent as InstagramIcon } from "./../../../assets/images/instagram.svg";
import { ReactComponent as TwitterIcon } from "./../../../assets/images/twitter.svg";

const SocialMedia = () => {
  return (
    <div className="flex justify-center items-center my-6">
      <a
        href="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FacebookIcon className="social-icon" />
      </a>

      <a
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <InstagramIcon className="social-icon" />
      </a>

      <a
        href="https://www.twitter.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <TwitterIcon className="social-icon" />
      </a>
    </div>
  );
};

export default SocialMedia;
