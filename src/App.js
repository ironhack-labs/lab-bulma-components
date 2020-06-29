import React, {Component} from 'react';
import Navbar from './navbar/Navbar'
import FormField from './formfield/FormField'
class App extends Component {
  render(){
    return( 
    <div>
      <Navbar/>
    <FormField />
    </div>
    );
  }

}

export default App;
