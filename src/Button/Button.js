import React from 'react';
import 'bulma/css/bulma.css';


const Button = (props) => {

    const{isSmall, isDanger, className, isSuccess, children} = props

    const classNameString =`
    button
    ${className}
    ${isSmall?'is-small':''}
    ${isDanger?'is-danger':''}
    ${isSuccess?'is-success':''}
    `

    return (
        <div>
            <button className={classNameString}> {children} </button>
        </div>
    )
}

export default Button 