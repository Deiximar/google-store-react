import { NavLink } from "react-router-dom";
import Icon from "../icons/Icon.jsx";
import CartIcon from "../../assets/icons/CartIcon.jsx";
import search from "../../assets/icons/Search.svg";
import help from "../../assets/icons/Help.svg";
import avatar from "../../assets/icons/Avatar.svg";

const IconsNav = () => {
  return (
    <div className="nav-icons">
      <Icon name={search} describe="Search Icon"></Icon>
      <Icon name={help} describe="Help Icon"></Icon>
      <NavLink to="/cart-page">
        <CartIcon />
      </NavLink>
      <Icon name={avatar} describe="Avatar Icon"></Icon>
    </div>
  );
};

export default IconsNav;
