import Button from "../buttons/Button.jsx";
import Icon from "../icons/Icon";

import googleLogo from "../../assets/icons/google-logo.png";

const links = [
  {
    link: "Phones",
    url: "#",
  },
  {
    link: "Earbuds",
    url: "#",
  },
  {
    link: "Watches",
    url: "#",
  },
  {
    link: "Smart Home",
    url: "#",
  },
  {
    link: "Accesories",
    url: "#",
  },
  {
    link: "Subscriptions",
    url: "#",
  },
];

const NavLinks = () => {
  const listItems = links.map((link) => (
    <li>
      <Button linkButton={link} />
    </li>
  ));

  return (
    <nav className="menu-nav">
      <Icon
        name={googleLogo}
        describe="Google Logo"
        classNameProp="google-logo"
      />
      <ul className="navBar">{listItems}</ul>
    </nav>
  );
};
export default NavLinks;
