import React from 'react'

const CoolButton = props => {
    return (
    <>
        <button className={props.class}>{props.text}</button>
    </>
    )
}

export default CoolButton

