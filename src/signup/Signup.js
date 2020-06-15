import React from 'react'
import 'bulma/css/bulma.css';
import Navbar from '../navbar/Navbar'
import FormField from '../formfield/Formfield'
import CoolButton from '../coolbutton/CoolButton'

function Signup(){

    return (<div>
        <Navbar />
        <form>
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g alexsmith@gmail.com" />
        <FormField label="Password" type="password" placeholder="e.g ********" />
        <CoolButton type="submit" isPrimary>Submit</CoolButton>
        </form>
    </div>)
}

export default Signup
