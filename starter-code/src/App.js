import React from 'react';
import Navbar from './Components/Navbar/navbar.js'
import FormField from './Components/FormField/formfield.js'

class App extends React.Component {

render(){

    return (
        <div className="App">
        <Navbar />
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        </div>
        
    );
}

}

export default App;