import Icon from "../icons/Icon";
import facebook from "../../assets/icons/facebook.svg";
import instagram from "../../assets/icons/instagram.svg";
import tiktok from "../../assets/icons/tiktok.svg";
import x from "../../assets/icons/x.svg";
import youtube from "../../assets/icons/youtube.svg";
const SocialIcons = () => {
  return (
    <div className="socialIcons">
      <Icon name={x} describe="X Icon" classNameProp="icon"></Icon>
      <Icon
        name={instagram}
        describe="Instagram Icon"
        classNameProp="icon"
      ></Icon>
      <Icon
        name={facebook}
        describe="Facebook Icon"
        classNameProp="icon"
      ></Icon>
      <Icon name={youtube} describe="Youtube Icon" classNameProp="icon"></Icon>
      <Icon name={tiktok} describe="Tiktok Icon" classNameProp="icon"></Icon>
    </div>
  );
};
export default SocialIcons;
