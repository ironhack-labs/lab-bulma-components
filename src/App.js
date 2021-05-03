import React from 'react';
import 'bulma/css/bulma.css';
import Navbar from './navbar/Navbar';
import FormField from './formfield/FormField';
import CoolButton from './coolbutton/CoolButton';
import SignUp from './signup/SignUp';

class App extends React.Component {
    render() {
        return (
                <SignUp/>
        );
    }
}

export default App;
