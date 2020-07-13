import React from 'react'

import 'bulma/css/bulma.css'

import Navbar from '../navbar/Navbar'
import Formfield from '../formfield/FormField'
import CoolButton from '../CoolButton/CoolButton'

const Signup = () => {
    return (
      <div>    
        <Navbar/>
        <form>
          <Formfield label="Name" type="text" placeholder="e.g Alex Smith" />
          <Formfield label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
          <Formfield label="Password" type="password" placeholder="Enter a password" />
          <CoolButton isSmall isSuccess name="Sign Up!" />
        </form>
      </div>
    )
}


export default Signup