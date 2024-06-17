import Icon from "../icons/Icon";
import { Link, NavLink } from "react-router-dom";
import navStyles from "./nav.module.css";

import googleLogo from "../../assets/icons/google-logo.png";

const links = [
  {
    text: "Phones",
    path: "/phones",
    disabled: true,
  },
  {
    text: "Earbuds",
    path: "/earbuds-page",
    disabled: false,
  },
  {
    text: "Watches",
    path: "/watches-page",
    disabled: false,
  },
  {
    text: "Smart Home",
    path: "/smart-home",
    disabled: true,
  },
  {
    text: "Accesories",
    path: "/accesories",
    disabled: true,
  },
  {
    text: "Subscriptions",
    path: "/subscriptions",
    disabled: true,
  },
];

const NavLinks = () => {
  const listItems = links.map((link) => (
    <li key={link.path}>
      <NavLink
        disabled={link.disabled}
        className={({ isActive }) => (isActive ? navStyles.active : "")}
        to={link.path}
      >
        {link.text}
      </NavLink>
    </li>
  ));

  return (
    <nav className={navStyles.menuNav}>
      <Link to="/">
        <Icon
          name={googleLogo}
          describe="Google Logo"
          className={navStyles.googleLogo}
        />
      </Link>

      <ul className={navStyles.navBar}>{listItems}</ul>
    </nav>
  );
};
export default NavLinks;
