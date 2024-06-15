import Icon from "../icons/Icon";
import { Link } from "react-router-dom";

import googleLogo from "../../assets/icons/google-logo.png";

const links = [
  {
    text: "Phones",
    path: "#",
  },
  {
    text: "Earbuds",
    path: "/earbuds-page",
  },
  {
    text: "Watches",
    path: "/watches-page",
  },
  {
    text: "Smart Home",
    path: "#",
  },
  {
    text: "Accesories",
    path: "#",
  },
  {
    text: "Subscriptions",
    path: "#",
  },
];

const NavLinks = () => {
  const listItems = links.map((link) => (
    <li>
      <Link to={link.path}>{link.text}</Link>
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
