import React, {Component} from 'react';
import FormField from './components/FormField';
import Nav from './components/Nav';
import CoolButton from './components/CoolButton';


class App extends Component {
  render(){
    return(
      <div className="container" >
        <Nav />
        <div>
          <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
          <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        </div>
        <br />
        <div>
          <CoolButton isSmall isDanger className="button is-rounded my-class" >Button 1</CoolButton>
          <CoolButton isSmall isSuccess className="button">Button 2</CoolButton>
        </div>
        
      </div>
    );
  }
}

export default App;