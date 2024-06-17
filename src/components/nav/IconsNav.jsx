import { NavLink } from "react-router-dom";
import Icon from "../icons/Icon.jsx";
import CartIcon from "../../assets/icons/CartIcon.jsx";
import search from "../../assets/icons/Search.svg";
import help from "../../assets/icons/Help.svg";
import avatar from "../../assets/icons/Avatar.svg";
import { useLocalStorage } from "../../utils/useLocalStorage.js";
import navStyles from "./nav.module.css";

const IconsNav = () => {
  const [cartProducts] = useLocalStorage("cart", []);

  const totalQuantity = cartProducts.reduce((acc, current) => {
    return acc + current.quantity;
  }, 0);
  return (
    <div className={navStyles.navIcons}>
      <Icon name={search} describe="Search Icon"></Icon>
      <Icon name={help} describe="Help Icon"></Icon>
      <NavLink
        to="/cart-page"
        className={({ isActive }) => (isActive ? navStyles.active : "")}
      >
        <CartIcon />
        {cartProducts.length > 0 && (
          <p className={navStyles.badge}>{totalQuantity}</p>
        )}
      </NavLink>
      <Icon name={avatar} describe="Avatar Icon"></Icon>
    </div>
  );
};

export default IconsNav;
