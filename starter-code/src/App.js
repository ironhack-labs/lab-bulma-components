import React from 'react';
import Navbar from './Navbar'
import FormField from './FormField'
import CoolButton from './CoolButton';
import Signup from './Signup';

class App extends React.Component {
    state = {

    }
    render() {
        return(
            <div className="app">
                <Signup />
            </div>
        )
    }
}

export default App; 