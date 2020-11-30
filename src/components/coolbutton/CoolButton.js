import './CoolButton.css'
import 'bulma/css/bulma.css';

const CoolButton = props => {
let button = `button ${props.className} ${props.isDanger} ${props.isSmall} ${props.isSuccess} `

    return (
        <button id='button' className={button}  style={{ backgroundColor: props.b1 ? '#ee4f5e' : '#6ed261' }}>{props.b1} {props.b2} {props.b3} </button>
       
    )
}

export default CoolButton