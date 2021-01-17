import React from 'react';
import 'bulma/css/bulma.css';

import FormField from '../formfield/FormField'
import CoolButton from '../coolbutton/CoolButton'

class Signup extends React.Component {
    render() {
        return(
            <div>
                <p>Name</p>
                < FormField type='text' placeholder='e.g Alex Smith' />
                <p>Email</p>
                < FormField type='email' placeholder='e.g. alexsmith@gmail.com' />
                <p>Password</p>
                < FormField type='password' placeholder='*********' />

                <CoolButton className="button is-rounded my-class is-danger is-small" value="Submit"/>
            </div>
        );
    }
}

export default Signup