import React from 'react';
import './App.css';
import Navbar from './Navbar';
import FormField from './FormField';


class App extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
            
                <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
                <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
            </div>
        )
    }
}

export default App;