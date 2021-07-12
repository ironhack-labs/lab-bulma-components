import React from 'react';
import 'bulma/css/bulma.css';
import Navbar from './navbar/Navbar';
import FormField from './formField/FormField';
import CoolButton from './coolButton/CoolButton';
import Message from './message/Message';

const App = () => {
    return (
        <div>
            <Navbar />
            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
            <FormField label="Password" type="password" placeholder="e.g. AlexSmith123" />
            <Message isInfo title='Hello World'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
            </Message>
        </div>
    )
};

export default App;