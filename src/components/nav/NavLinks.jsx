import Button from "./buttons/Button.jsx"
import navStyles from "../nav/nav.module.css"

const links = [
    {
        link: "Phones",
        url: "#"
    },
    {
        link: "Earbuds",
        url: "#"
    },
    {
        link: "Watches",
        url: "#"
    },
    {
        link: "Smart Home",
        url: "#"
    },
    {
        link: "Accesories",
        url: "#"
    },
    {
        link: "Subscriptions",
        url: "#"
    },
]

const NavLinks = () => {
    const listItems = links.map(link =>

        <li><Button linkButton={link} /></li>
    )

    return (
        <ul className={navStyles.navBar}>
            {listItems}
        </ul>
    )
}
export default NavLinks