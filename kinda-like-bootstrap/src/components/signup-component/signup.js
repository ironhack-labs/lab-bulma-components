import React from 'react';
import CoolButton from '../form-components/button'
import Navbar from '../nav-components/navbar'
import FormField from '../form-components/forms'

class SignUp extends React.Component {
    
    render (){
        return (
            <div>
                <Navbar/>
                <div class="columns is-mobile">
                    <div class="column is-4 is-offset-4">
                        <h1>Signup to log in</h1>
                        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
                        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
                        <FormField label="Password" type="password" placeholder="e.g. 123ABC" />
                        <CoolButton isSmall isInfo>Sign up!</CoolButton>
                    </div>
                </div>
            </div>
        )
    }

}

export default SignUp;