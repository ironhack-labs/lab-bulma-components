import React from 'react'
import Navbar from './Navbar'
import FormField from './Formfield'
import CoolButton from './CoolButton'

const Signup = () => {
return(
<>
 <Navbar />
    <FormField label="Name" type="text" placeholder="Your Name" />
    <FormField label="email" type="email" placeholder="Enter your email here" />
    <FormField label="password" type="password" placeholder="Your password" />
    <CoolButton typeButton="button is-info is-rounded is-focused" text="submit">Submit</CoolButton>
</>
)
}

export default Signup