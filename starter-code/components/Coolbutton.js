import React from 'react'

const Coolbutton = (props) => { 

    return (
        <button type= {props.type} className="button is-rounded my-class is-primary">
            {props.text}
        </button>
    )
    }

export default Coolbutton