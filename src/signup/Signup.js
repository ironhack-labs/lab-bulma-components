import React, { Component } from 'react'
import Navbar from '../navbar/Navbar'
import CoolButton from '../coolbutton/CoolButton'
import FormField from '../formfield/FormField'


class Signup extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
                <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
                <FormField label="Password" type="password" placeholder="*****" />
                <CoolButton></CoolButton>
            </div>
        )
    }
}

export default Signup