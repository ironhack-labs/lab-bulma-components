import React, {Component} from 'react';
import Navbar from './Navbar';
import FormField from './FormField';
import CoolButton from './CoolButton';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Navbar/>
                <div className="columns">
                    <div className="column"></div>
                    <div className="column is-one-third">
                        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
                        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
                        <br />
                        <CoolButton isSmall isDanger className="button is-danger is-rounded" name="Button 1"></CoolButton>
                        <CoolButton isSmall isSuccess className="button is-success" name="Button 2"></CoolButton>
                    </div>
                    <div className="column"></div>
                </div>
            </div>
        )
    }
}

export default App;