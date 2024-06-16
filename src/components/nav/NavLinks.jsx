import Icon from "../icons/Icon";
import { Link, NavLink } from "react-router-dom";

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
      <NavLink disabled={link.disabled} to={link.path}>
        {link.text}
      </NavLink>
    </li>
  ));

  return (
    <nav className="menu-nav">
      <Link to="/">
        <Icon
          name={googleLogo}
          describe="Google Logo"
          classNameProp="google-logo"
        />
      </Link>

      <ul className="navBar">{listItems}</ul>
    </nav>
  );
};
export default NavLinks;
