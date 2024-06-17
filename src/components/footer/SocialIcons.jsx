import Icon from "../icons/Icon";
import facebook from "../../assets/icons/facebook.svg";
import instagram from "../../assets/icons/instagram.svg";
import tiktok from "../../assets/icons/tiktok.svg";
import x from "../../assets/icons/x.svg";
import youtube from "../../assets/icons/youtube.svg";
import footerStyles from "./footer.module.css";

const SocialIcons = () => {
  return (
    <div className={footerStyles.socialIcons}>
      <Icon name={x} describe="X Icon" className={footerStyles.icon}></Icon>
      <Icon
        name={instagram}
        describe="Instagram Icon"
        className={footerStyles.icon}
      ></Icon>
      <Icon
        name={facebook}
        describe="Facebook Icon"
        className={footerStyles.icon}
      ></Icon>
      <Icon
        name={youtube}
        describe="Youtube Icon"
        className={footerStyles.icon}
      ></Icon>
      <Icon
        name={tiktok}
        describe="Tiktok Icon"
        className={footerStyles.icon}
      ></Icon>
    </div>
  );
};
export default SocialIcons;
