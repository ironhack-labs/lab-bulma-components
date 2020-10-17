import React from 'react'
import 'bulma/css/bulma.css'


const CoolButton = props => {
    console.log(props)
    return (
        <div className="buttons">
            <button className={`button ${props.className} ${props.isDanger} ${props.isSuccess}`} >{props.children}</button>
        </div>
    )

  };

export default CoolButton
