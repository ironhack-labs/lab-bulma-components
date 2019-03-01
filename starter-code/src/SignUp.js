import React from 'react';
import FormField from './FormField';
import CoolButton from './CoolButton';


class SignUp extends React.Component {
    render () {

        return (
            <div className="SignUp">
                <FormField label="Name" type="text" placeholder="Monsieur Toñio"/>
                <FormField label="Email" type="email" placeholder="e.g. monsieur.tonio@gmail.com"/>
                <FormField label="Password" type="password" placeholder="*******"/>
                <CoolButton isSmall isDanger classButton="button is-rounded my-class is-outlined is-small" buttonName="Submit" />
            </div>
        );
    }
}

export default SignUp;