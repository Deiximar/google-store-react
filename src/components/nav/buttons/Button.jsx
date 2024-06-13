import "../nav.module.css"

const Button = ({ linkButton }) => {

    return (
        <a href={linkButton.url}>{linkButton.link}</a>
    )
}

export default Button;