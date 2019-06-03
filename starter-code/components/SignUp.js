import React from 'react'
import Navbar from './Navbar';

const SignUp = props =>{
    if(!props.noBar){
    return(
        <div className="signUpForm">
        <Navbar/>
        <div className="field">
        <label className="label">{props.label}</label>
        <div className="control">
            <input className="input" type={props.type} placeholder={props.placeholder}/>
        </div>
        </div>
        </div>
    )
    }else{
        return(
            <div className="signUpForm">
            <div className="field">
            <label className="label">{props.label}</label>
            <div className="control">
                <input className="input" type={props.type} placeholder={props.placeholder}/>
            </div>
            </div>
            </div>
        )
    }
}

export default SignUp