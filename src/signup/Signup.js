import React from 'react'
import Navbar from '../navbar/Navbar'
import FormField from '../formField/FormField'
import CoolButton from '../coolButton/CoolButton'
import 'bulma/css/bulma.css'
import './Signup.css'


const Signup = props => {

    return (
        <div className="iteration4">

            <Navbar/>
            
            <div className="signupForm">
                <FormField label="Name" type="text" placeholder="e.g Alex Smith"/>
                <FormField label="Email" type="email" placeholder="e.g alexsmith@gmail.com"/>
                <FormField label="Password" type="password" placeholder="********" />
                    
                <div className="field is-grouped">
                    <div className="control">
                        <CoolButton
                            name="Signup"
                            size="is-normal"
                            color="is-success"
                            className='is-link'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Signup