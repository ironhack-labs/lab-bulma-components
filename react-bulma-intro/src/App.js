import React, { Component } from 'react';
import './App.css';
import Bulma from './bulmaNavbar';
import FormField from './FormField';
import CoolButton from './CoolButton';
import Message from './Message'

class App extends Component {
  state = {'testing':'hi'}

  render() {
    return <div className="App">
        {/* parentDate: {String(new Date())} */}

        <Bulma />
        <FormField label="Hello World" placeholder="alex" />

        <FormField label="Goodbye Planet" placeholder="alex@gmail.com" />

            <div>
        <CoolButton color="gold" className="button is-small is-success is-danger is-rounded">
                Button 1
              </CoolButton>
            <CoolButton color="blue" className="button is-small is-success">
                Button 2
              </CoolButton>
        
            </div>
        
      <div className="App-header">
        <Message />
        </div>
        
      </div>;
  }
}

export default App;


