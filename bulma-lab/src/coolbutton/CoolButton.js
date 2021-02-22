import './CoolButton.css'

const CoolButton = ({ color, size, shape, text }) => {
    const classes = `button ${color} ${size} ${shape}`
    return (
        <button className={classes}>{text}</button>
    )
}

export default CoolButton