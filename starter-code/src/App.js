import React from 'react';
import './App.css';
import Navbar from './Navbar';
import FormField from './FormField';
import Signup from './Signup';

class App extends React.Component {
    render() {
        return (
            <div>
                <Signup />
            </div>
        )
    }
}

export default App;