import { Link } from "react-router-dom";
import Icon from "../icons/Icon.jsx";
import search from "../../assets/icons/Search.svg";
import help from "../../assets/icons/Help.svg";
import cart from "../../assets/icons/Cart.svg";
import avatar from "../../assets/icons/Avatar.svg";

const IconsNav = () => {
  return (
    <div className="nav-icons">
      <Icon name={search} describe="Search Icon"></Icon>
      <Icon name={help} describe="Help Icon"></Icon>
      <Link to="/cart-page">
        <Icon name={cart} describe="Cart Icon"></Icon>
      </Link>
      <Icon name={avatar} describe="Avatar Icon"></Icon>
    </div>
  );
};

export default IconsNav;
