import './text.css'

const TextBox = ({text, color, backgroundColor}) => {
    return <h1 
                style=
                    {{
                        color: color,
                        backgroundColor: backgroundColor,
                        textTransform: 'uppercase',
                        textAlign: 'center'
                    }}>
                        {text}
            </h1>
}

TextBox.defaultProps = {
    text: 'Hello, world!',
    color: 'green',
    backgroundColor: 'black'
}

export default TextBox