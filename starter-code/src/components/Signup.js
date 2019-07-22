import React, { Component } from 'react';

import Container from './Container';
import NavBar from './Navbar';
import FormField from './FormField';
import CoolButton from './CoolButton';

class Signup extends Component {
    render() {
        return(
            <div>
                <NavBar />
                <Container>
                    <form>
                        <FormField name="Name" type="text" placeholder="e.g Alex Smith" />
                        <FormField name="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
                        <FormField name="Password" type="password" placeholder="e.g password" />
                        <CoolButton isBlack />
                    </form>
                </Container>
            </div>
        )
    }
}

export default Signup;