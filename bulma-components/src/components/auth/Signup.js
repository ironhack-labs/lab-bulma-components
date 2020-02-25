import React from 'react'
import Navbar from '../navbar/Navbar'
import FormField from '../form/Form'
import Coolbtn2 from '../btn/Coolbtn2'

import 'bulma/css/bulma.css';

const Signup = props => {
    return(
        <form>
        <Navbar/>
        <div className="container">       
            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
            <FormField label="Password" type="password" placeholder="Password"/>
            <Coolbtn2 text="Submit" type="Submit"></Coolbtn2>
        </div>
        </form>
    )
}

export default Signup