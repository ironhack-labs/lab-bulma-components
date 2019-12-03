import React from 'react'
import Navbar from './Navbar'
import FormField from './Formfield'
import CoolButton from './CoolButton'


function signup(props) {
    return (
        <>
            <Navbar />
            <div className='formField'>
                <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
                <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
                <FormField label="Password" type="password" placeholder="******" />
            </div>
            <div className='button'>
                <CoolButton isSuccess className="button is-danger is-rounded" text='Button 1'></CoolButton>
                {/* <CoolButton className="button is-success" text='Button 2'></CoolButton> */}
            </div>

        </>
    )
}

export default signup