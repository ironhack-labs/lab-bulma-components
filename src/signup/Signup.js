import React from 'react'
import ReactDOM from 'react-dom'

import Navbar from '../navbar/Navbar'
import FormField from '../formfield/FormField'
import CoolButton from '../coolbutton/CoolButton'

const Signup = () => {
    return (
        <React.Fragment>
            <Navbar />
            <FormField label="name" type="text" placeholder="Enter your name" />
            <FormField label="email" type="email" placeholder="Enter your email" />
            <FormField label="password" type="password" placeholder="Enter your password" />
            <CoolButton className="is-small is-success">Signup</CoolButton>
        </React.Fragment>
    )
}

export default Signup