import React from 'react'
import './Signup.css'
import 'bulma/css/bulma.css'
import Navbar from '../navbar/Navbar'
import Formfield from '../formfield/Formfield'
import CoolButton from '../coolButton/CoolButton'


const Signup = () => {
    return (
        <>
    <div>
      <Navbar />
    </div>

    <div>
    <form action="/" method="post">
    <Formfield 
        label="Name"
        type="text"
        placeholder="e.g Alex Smith"
    />
    <Formfield 
        label="Email"
        type="email"
        placeholder="e.g alexsmith@gmail.com"
    />
    <Formfield
      label="password"
      type="password"
    />
    </form>
    </div>

    <div>
      <CoolButton isSuccess isMedium>Sign up</CoolButton>
    </div>

    </>

    )
}

export default Signup
