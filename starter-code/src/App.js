import React, {Component} from 'react';
import Nav from './Nav';
import FormField from './FormField';
import CoolButton from './CoolButton';
import './App.css';


class App extends Component{
    render() {
        return (
            <div>
                <Nav />
                <FormField />
                
            </div>
        )
    }
}

export default App;