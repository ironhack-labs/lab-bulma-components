import React from 'react';
import './Signup.css';
import FormField from './FormField/FormField.jsx';
import CoolButton from './CoolButton/CoolButton.jsx';

class Signup extends React.Component {
    render () {
        return (
            <div className='signupContainer'>
                <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
                <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
                <FormField label="Password" type="password" placeholder="**********" />
                <CoolButton classNameText="button is-rounded my-class is-danger is-small" buttonText='Submit'/>
            </div>
        );
    }
}


export default Signup;



