import React from 'react'

//css
import 'bulma/css/bulma.css';
import './button.css'

const button = props => {

    return(
        <>
            <button className='button is-rounded my-class is-danger is-small'>{props.button1}</button>
            <button className='button is-small is-success'>{props.button2}</button>
        </>
    )

}


export default button