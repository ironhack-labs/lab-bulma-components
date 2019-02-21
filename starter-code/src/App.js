import React from 'react';
import Navbar from './Navbar.js';
import FormField from './FormField.js';



class App extends React.Component {
    render () {

        return (
            <div className="App">
                <Navbar />
                <FormField label="Name" type="text" />    
            </div>
        );
    }
}



export default App;