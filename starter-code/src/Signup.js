import React, {Component} from 'react';
import Navbar from './Navbar';
import FormField from './FormField';
import CoolButton from './CoolButton';

class Signup extends Component {
    render() {
        return (
            <div className="Signup">
                <Navbar/>
                <div className="columns">
                    <div className="column"></div>
                    <div className="column is-one-third">
                        <div className="field">
                            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
                            <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
                            <FormField label="Password" type="password" placeholder="e.g. IR0n#@ck" />
                        </div>

                        <CoolButton className="button is-primary is-rounded" buttonName="Submit"></CoolButton>
                    </div>
                    <div className="column"></div>
                </div>
            </div>
        );
    }
}

export default Signup;