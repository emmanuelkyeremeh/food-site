import { Facebook, Twitter } from "@material-ui/icons";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
const Footer = () => {
  return (
    <footer>
      <div className="footer-social-media">
        <p>Follow us</p>
        <div className="footer-social-media-icons">
          <Facebook className="footer-social-media-icons" />
          <Twitter className="footer-social-media-icons" />
          <InstagramIcon className="footer-social-media-icons" />
        </div>
      </div>
      <div className="footer-logo">RESTAURANT</div>
    </footer>
  );
};

export default Footer;
