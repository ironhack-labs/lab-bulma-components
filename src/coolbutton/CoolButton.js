import React from 'react'
import 'bulma/css/bulma.css';

// function CoolButton() {
//     return (
//         <div>
//            <button className="button is-rounded my-class is-danger is-small">Button 1</button>
//            <button className="button is-small is-success">Button 2</button> 
//         </div>
//     )
// }


const CoolButton = props => { 

    return (
            <button className={props.class}>{props.name}</button>
    )
}

export default CoolButton