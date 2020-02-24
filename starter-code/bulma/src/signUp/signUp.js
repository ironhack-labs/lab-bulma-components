import React from 'react'
import FormField from '../formField/formField'


const Signup= props =>{
    return(
<>
            <FormField text='Name' type='text' placeholder='e.g Alex Smith'></FormField>
            <FormField text='Email' type='email' placeholder='e.g. alexsmith@gmail.com"'></FormField>
            <FormField text='Password' type='password' placeholder='********'></FormField>


</>
    )
}

export default Signup