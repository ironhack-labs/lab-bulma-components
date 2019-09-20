import React from 'react';

// Components
import Navbar from './navbar';
import FormField from './form';
import CoolButton from './coolbutton';

export default class Signup extends React.Component {

    render() {

        return (

            <div>

                <Navbar />
                <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
                <FormField label="Email" type="email" placeholder="e.g Alex@yahoo.com" />
                <FormField label="Email" type="password" placeholder="Secure Password" />
                <CoolButton styles = 'button is-success' buttonName = 'Submit' />

            </div>

        )

    }

}