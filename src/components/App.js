import React from 'react'
import Navbar from './Navbar/Navbar'
import FormField from './FormField/FormField'
//import Signup from "./Signup/Signup
import CoolButton from './CoolButton/CoolButton'

const App = () => {
    return (
        <div>
            <Navbar>

            </Navbar>

            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
            <CoolButton isSmall isDanger className="is-rounded my-class" />
            {/* <Signup /> */}


        </div>
    )
}

export default App
