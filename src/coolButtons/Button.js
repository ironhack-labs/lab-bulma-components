import React from 'react'

 const Button = (props) => {
     const {buttonClass, buttonName} = props
    return (
        <div>
            <button className={buttonClass}>{buttonName}</button>
        </div>
    )
}

export default Button