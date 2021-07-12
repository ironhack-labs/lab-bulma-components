import React from 'react';
import { CoolButton } from '../button/CoolButton';
import { FormField } from '../formfield/FormField';
import { Navbar } from '../navbar/Navbar';

function Signup(props) {
    return (
        <div>
            <Navbar/>
            <FormField 
                label={"Name"}
                type={"text"}
                placeholder={"e.g Alex Smith"}
            />
            <FormField 
                label={"Email"}
                type={"email"}
                placeholder={"e.g. alexsmith@gmail.com"}
            />
            <FormField 
                label={"Password"}
                type={"password"}
                placeholder={""}
            />
            <CoolButton className={"button is-small is-success"} text={"Submit"}/>
        </div>
    )
};

export {Signup};