import React from 'react';
import Navbar from './Components/Navbar/navbar.js'
import FormField from './Components/FormField/FormField.js'
import CoolButton from './Components/ CoolButton/CoolButton'

class App extends React.Component {

render(){

    return (
        <div className="App">
            <Navbar />
            <FormField />
            <CoolButton />
        </div>
        
    );
}

}

export default App;