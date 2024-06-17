import Button from "../buttons/Button.jsx";
import Icon from "../icons/Icon.jsx";
import spainFlag from "../../assets/icons/Spain.svg";
import footerStyles from "./footer.module.css";

const terms = [
  {
    link: "Spain",
    url: "#",
  },
  {
    link: "Privacy",
    url: "#",
  },
  {
    link: "Google Next Commitment to Privacity",
    url: "#",
  },
  {
    link: "Sales Terms",
    url: "#",
  },
  {
    link: "Terms of Service",
    url: "#",
  },
];
const Legal = () => {
  const termList = terms.map((link) => (
    <li key={link.link}>
      <Button linkButton={link} />
    </li>
  ));

  return (
    <div className={footerStyles.moreInformation}>
      <Icon
        name={spainFlag}
        describe="Spain flag"
        className={footerStyles.flag}
      />
      <ul className={footerStyles.termsAndConditions}>{termList}</ul>
    </div>
  );
};
export default Legal;
