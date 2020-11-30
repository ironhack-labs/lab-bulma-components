import 'bulma/css/bulma.css';

import './coolbutton/CoolButton.css';

const CoolButton = props => {

    return (

        <div className="coolButton">
            <button className={props.className}>{props.text}</button>
        </div>
        
    )
}

export default CoolButton