import React from 'react'
import './Signup.css'
import 'bulma/css/bulma.css'
import Navbar from './../navbar/Navbar'
import FormField from './../formfield/FormField'
import CoolButton from './../coolbutton/CoolButton'

const Signup = props => {
    return (
        <main>
            <header>
                <div className="App">
                    <Navbar />
                </div>
            </header>
            <section>
                <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
                <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
                <FormField label="Password" type="password" placeholder="" />

                <div>
                    <CoolButton isSmall isDanger className="is-rounded my-class" class="button is-rounded my-class is-danger is-small" test="Submit"></CoolButton>
                </div>
            </section>


        </main>
    )
}

export default Signup