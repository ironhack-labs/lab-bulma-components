import React from 'react'
import FormField from './formField/FormField'
import Button from './navbar/CoolButton'

const Signup = () => {

    return (
        <React.Fragment>
            <FormField label="Name" type="text" placeholder="e.g Pepito Perez" />
            <FormField label="Email" type="email" placeholder="e.g Pepito_Perez@gmail.com" />
            <FormField label="Password" type="password" placeholder="******" />
            <Button className="button is-rounded my-class is-black button-nav">
                Submit
            </Button>
        </React.Fragment>
    )
}

export default Signup