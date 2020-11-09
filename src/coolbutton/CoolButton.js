import React from 'react'

export const CoolButton = (props) => {
    
    return (
        <button  className= {'button ' + props.class}> {props.children} </button>
    )
}

export default CoolButton