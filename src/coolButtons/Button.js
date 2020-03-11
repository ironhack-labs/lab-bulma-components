import React from 'react'
import Buttons from './Buttons'

 const Button = ({buttonClass}) => {
    return (
        <div>
            <button className={buttonClass}>{buttonClass}</button>
        </div>
    )
}

export default Button