import React from 'react';
import 'bulma/css/bulma.css';
import Navbar from './navbar/Navbar'
import FormField from './formfield/FormField'
import CoolButton from './components/CoolButton'


class App extends React.Component {
  render() {
    return (
      <div id="App">
        <Navbar />
        <FormField label="Email" input="" placeholder="Email"/>
      </div>
    )
  }
}

export default App;
