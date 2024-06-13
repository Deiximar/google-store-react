import Icon from "../icons/Icon";
import facebook from "../../assets/icons/facebook.svg";
import instagram from "../../assets/icons/instagram.svg";
import tiktok from "../../assets/icons/tiktok.svg";
import x from "../../assets/icons/x.svg";
import youtube from "../../assets/icons/youtube.svg";
const SocialIcons = () => {
  return (
    <div className="socialIcons">
      <Icon name={x} describe="X Icon"></Icon>
      <Icon name={instagram} describe="Instagram Icon"></Icon>
      <Icon name={facebook} describe="Facebook Icon"></Icon>
      <Icon name={youtube} describe="Youtube Icon"></Icon>
      <Icon name={tiktok} describe="Tiktok Icon"></Icon>
    </div>
  );
};
export default SocialIcons;