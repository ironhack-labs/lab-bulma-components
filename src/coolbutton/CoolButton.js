import React from 'react'


const CoolButton = props => {
    return (
        <>

            <button className={props.className}>{props.name}</button>
        </>
    )
}

export default CoolButton