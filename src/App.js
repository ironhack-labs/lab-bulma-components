import React from 'react';
import 'bulma/css/bulma.css';
import Navbar from './navbar/Navbar'
import FormField from './formfield/Formfield'
import CoolButton from './components/CoolButton'

const App = () => {
  return <h1>Bulma</h1>;
};

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