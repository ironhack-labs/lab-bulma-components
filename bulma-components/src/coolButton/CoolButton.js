import './CoolButton.css'
import 'bulma/css/bulma.css';

const CoolButton = ({ className, btn1 }) => {
    return (
        <>
            <button className={className}> {btn1} </button>
        </>
    )
}

export default CoolButton