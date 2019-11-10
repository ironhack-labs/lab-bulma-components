import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import FormField from './Components/FormField';

class App extends Component {
    render() {
        return (
            <div className='App'>
                <Navbar />
                <FormField label='Name' type='text' placeholder='e.g Alex Smith'/>
                <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
            </div>
        )
    }
}

export default App;