import React, { Component } from 'react';
import Nav from '../components/nav.js'
import FormField from '../components/formfield.js'
import Button from '../components/formfield.js'

class App extends Component {
  render() {
      return (
      <div className="App">
<Nav/>
<FormField label="Name" type="text" placeholder="e.g Alex Smith" varName="Name"/>
<FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" varName="Email" />
      </div>
      );
  }
}
  
  export default App;