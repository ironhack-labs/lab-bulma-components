import React from 'react'

import './SignUp.css'
import 'bulma/css/bulma.css'
import NavBar from '../Navbar/Navbar'
import CoolButton from '../CoolButton/CoolButton'

const SignUp = props => {

    return (
    <>
    <div>
        <NavBar></NavBar>
    </div>
    
        <div class="field">
         <label class="label">Name</label>
            <div class="control">
             <input class="input" type="text" placeholder="e.g Alex Smith" />
            </div>
        </div>
        <div class="field">
            <label class="label">Email</label>
            <div class="control">
                <input class="input" type="email" placeholder="e.g. alexsmith@gmail.com" />
            </div>
        </div>
         <div class="field">
            <label class="label">Password</label>
            <div class="control">
                <input class="input" type="password" placeholder="******" />
            </div>
            </div>
    <div>
        <CoolButton></CoolButton>
    </div>
            
    </>
    )

}


export default SignUp