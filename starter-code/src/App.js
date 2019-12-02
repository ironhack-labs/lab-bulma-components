import React from 'react';
import Navbar from './Navbar'
import FormField from './FormField'
import CoolButton from './CoolButton';

class App extends React.Component {
    state = {

    }
    render() {
        return(
            <div className="app">
                <h1>Title app</h1>
                <Navbar />

                <FormField label="Name" type="text" placeholder="Your name"/>
                <FormField label="Email" type="email" placeholder="email" />

                <CoolButton classBtn="button is-rounded my-class is-danger is-small" name="button 1"/>
                <CoolButton classBtn="button is-small is-success" name="button 2"/>
            </div>
        )
    }
}

export default App; 