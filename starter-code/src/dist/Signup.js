import React from "react";
import Navbar from "./dist/navbar"
import FormField from "./dist/formfields"
import CoolGreenButton from "./coolbutton"

const Signup = (
    <div>
        <FormField />

        <div className='field' style={{
            padding: '100px'
        }}>
            <label className='label'>Password</label>
            <div className='control'>
                <input className='input' type="password" placeholder='enter password here' />
            </div>
        </div>
    </div>
)

module.exports = Signup;