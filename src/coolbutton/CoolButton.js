import React from 'react'
import "bulma/css/bulma.css";


export const CoolButton = (props) => {
    const {isDanger, isSmall, Classes, isSuccess} = props;

    const classString = `
    button
    ${Classes}
    ${isDanger ? 'is-danger' : ''}
    ${isSmall ? 'is-small' : ''}
    ${isSuccess ? 'is-success' : ''}
    `

    return (
            <button className={classString}>{props.ButtonName}</button>

    )
}
