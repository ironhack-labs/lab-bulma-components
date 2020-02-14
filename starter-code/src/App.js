import Navbar from './components/Navbar.js';
import FormField from './components/FormField.js';
import Container from './components/Container.js'
import CoolButton from './components/CoolButton.js';
import React from 'react';
import Message from './components/Message.js';


function App() {
    return (
        <div>
            <Navbar />
            <Container>
                <div className="columns is-centered">
                    <div className="column is-6">
                        <FormField name="Name" type="text" placeholder="e.g Alex Smith"></FormField>
                        <FormField name="Email" type="email" placeholder="alexsmith@gmail.com"></FormField>
                        <FormField name="Password" type="password" placeholder="******"></FormField>
                    </div>
                </div>
                <div className="columns">
                    <div className="column has-text-centered">
                        <CoolButton isLarge isPrimary isRounded>Submit</CoolButton>
                    </div>
                </div>
                <Container><Message title="Receta" text="nome alcansa grasias"></Message></Container>
            </Container>
        </div>
    );
}
export default App;