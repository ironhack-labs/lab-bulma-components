import React, { Component } from 'react';
import FormField from './components/FormField';
import Navbar from './components/Navbar';
import CoolButton from './components/CoolButton';
import Signup from './components/Signup'

class App extends Component {
    state = {

    }

    render(){
        return(
            <div>
                <Signup />
            </div>
        )
    }
}

export default App;