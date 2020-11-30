import 'bulma/css/bulma.css';
import Navbar from '../navbar/Navbar';
import FormField from '../formField/FormField';
import CoolButton from '../coolButton/CoolButton';

import React, { Component } from 'react';

class Signup extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
                <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
                
            </div>
        )
    }
}

export default Signup;
