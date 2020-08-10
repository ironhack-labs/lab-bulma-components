import React from 'react';
import 'bulma/css/bulma.css';

/* function CoolButton(props) {
    console.log(props);
    return (
        <div className='control'>
            <button className={props.className} type={props.type} >{props.name}</button>


        </div>
    )
} */
const CoolButton = (props) => {
    const { isSmall, isDanger, className, isSuccess, children } = props

    const classes =
        ` button
     ${className}
     ${isSmall ? 'is-small' : ''}
     ${isDanger ? 'is-danger' : ''}
     ${isSuccess ? 'is-success' : ''}`

    return (
        <button className={classes}>{children}</button>
    )
}



export default CoolButton

