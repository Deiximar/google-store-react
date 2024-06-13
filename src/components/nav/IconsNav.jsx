import Icon from "../icons/Icon.jsx";
import Search from "../../assets/icons/Search.svg";
import Help from "../../assets/icons/Help.svg";
import Cart from "../../assets/icons/Cart.svg";
import Avatar from "../../assets/icons/Avatar.svg";

const IconsNav = () => {
  return (
    <div className="nav-icons">
      <Icon name={Search} describe="Search Icon"></Icon>
      <Icon name={Help} describe="Help Icon"></Icon>
      <Icon name={Cart} describe="Cart Icon"></Icon>
      <Icon name={Avatar} describe="Avatar Icon"></Icon>
    </div>
  );
};

export default IconsNav;
