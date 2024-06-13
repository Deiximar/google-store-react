import Button from "../buttons/Button.jsx";
import Icon from "../icons/Icon.jsx";
import spainFlag from "../../assets/icons/Spain.svg";
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
    <li>
      <Button linkButton={link} />
    </li>
  ));

  return (
    <div className="moreInformation">
      <Icon name={spainFlag} describe="Spain flag" classNameProp="flag" />
      <ul className="termsAndConditions">{termList}</ul>
    </div>
  );
};
export default Legal;
