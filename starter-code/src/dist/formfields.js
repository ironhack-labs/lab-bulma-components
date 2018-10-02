import React from "react";
import CoolGreenButton from "./coolbutton"
import CoolRedButton from "./coolbutton"

const FormField = (
    <div style={{
        padding: '100px'
    }}>
        <div className='field'>
            <label className='label'>Name</label>
            <div className='control'>
                <input className='input' type="text" placeholder='e.g Alex Smith' />
            </div>
        </div>

        <div className='field'>
            <label className='label'>Email</label>
            <div className='control'>
                <input className='input' type="email" placeholder='e.g. alexsmith@gmail.com' />
            </div>
        </div>
        <CoolGreenButton name="Submit" isSmall isSuccess>Submit</CoolGreenButton>

    </div>
)



module.exports = FormField;