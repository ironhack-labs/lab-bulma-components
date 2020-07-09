import React from 'react'
import Navbar from '../navbar/Navbar'
import FormField from '../formfield/FormField'
import Button from '../button/Button'

export default function Signup() {
    return (
        <div>
            <Navbar />
            <FormField
                label="Name" 
                type="text" 
                placeholder="e.g Alex Smith"
            />
         
            <FormField
                label="email" 
                type="text" 
                placeholder="alex@alex.com"
            />
           
            <FormField
                label="Password" 
                type="password" 
                placeholder="******"
            />
            <Button
                name="Signup"
                type="submit"
                style="button is-small is-danger"
            />
        </div>
    )
}


// Iteration 4 | A Signup Page
// Create a Signup component that contains:

// A Navbar
// A form with
// A FormField for name
// An FormField for email
// A FormField for password
// A CoolButton for submitting the form