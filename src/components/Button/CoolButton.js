import React from 'react'
import 'bulma/css/bulma.css';


const CoolButton = (props) => {
    return (
        // <div class = 'coolButton' > {props.CoolButton}
        // {/* <button class="button is-rounded my-class is-danger is-small">props.Button 1</button>
        // <button class="button is-small is-success">Button 2</button> */}
        // <button className={props.className}>{props.html}</button>
        // </div>

       
        <button className={props.className}>{props.html}</button>
       
    )

    
}

export default CoolButton;
