import React from 'react';

import Navbar from '../navbar/Navbar'
import FormField from '../formfield/FormField'
import CoolButton from '../coolbutton/CoolButton';

const SignUp = () => {

    const formButtonClases = ['button', 'is-rounded', 'is-info']

    return (

        <>

            <Navbar />

            <main>

                <section className='container'>

                    <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
                    <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
                    <FormField label="Password" type="password" placeholder="e.g. clm45cYxh.uh3" />
                    <CoolButton classes={formButtonClases.join(' ')} text='Submit' />

                </section>

            </main>

        </>

    )
}

export default SignUp;