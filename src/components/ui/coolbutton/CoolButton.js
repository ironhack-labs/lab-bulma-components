import React from 'react'
import './CoolButton.css'
import 'bulma/css/bulma.css'

const CoolButton = ({className, text}) => {

    return (
            <div className="container">

                <button className={className}>{text}</button>
                
            </div>
    )
}

export default CoolButton

