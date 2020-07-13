import React from 'react'

//css
import 'bulma/css/bulma.css';

//components

import Button from '../button/button'
import Nav from '../nav/nav'
import FormField from '../FormField/FormField'

const signup = () => {

    return (
        <>
            <Nav />

            <FormField label='name' type='text' placeholder='e.g Alex Smith'/>
            <FormField label='email' type='email' placeholder='e.g. alexsmith@gmail.com'/>
            <FormField label='Password' type='password' placeholder='xxxxxxxx'/>

            <Button className='button is-small is-success' button='submit'/>
        </>
    )
}

export default signup