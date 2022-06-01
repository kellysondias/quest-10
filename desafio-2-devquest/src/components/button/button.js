import './button.css'

const Button = ({label, showLabel}) => {
    return <button onClick={() => showLabel(label)} >{label}</button>
}

Button.defaultProps = {
    label: "Clique em mim"
}

export default Button