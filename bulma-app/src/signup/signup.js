import React from 'react'
import '../message/node_modules/bulma/css/bulma.css'
import CoolButton from '../coolbutton/coolbutton'
import Navbar from '../navbar/navbar'
import FormField from '../formfield/formField'


const Signup = () => {
return (
    <>
       <Navbar/>
       <FormField label="Name" type="text" placeholder="Asia Argento" />
       <FormField label="Email" type="email" placeholder="silver@giallo.com" />
       <FormField label="Password" type="password" placeholder="*********" />
       <CoolButton color="is-success" classList="is-rounded" text="submit"/>
        


    </>
    )
}

export default Signup