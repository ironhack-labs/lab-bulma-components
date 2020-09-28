import React  from 'react'

import './CoolButton.css'



const CoolButton = props => {


    return (
        //isSmall isDanger className="is-rounded my-class"
        <button  className= {props.className}>{props.name}</button>

    )
}

export default CoolButton