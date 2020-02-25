import React from 'react'

const SignUp = props => {

    return(

        <>
        <div className="field">
        <label className="label">{props.label}</label>
        <div className="control">
        <input className="input" type={props.type} placeholder={props.placeholder}/>
        </div>
        </div>
        <button className={props.class}>{props.text}</button>
        </>

    )


}


export default SignUp;