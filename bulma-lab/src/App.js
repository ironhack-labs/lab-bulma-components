import React from 'react';
// import './App.css';

import Navbar from './components/navbar';
import FormField from './components/form';
import Signup from './components/signup';
import Message from './components/message'

class App extends React.Component {

  render() {

    return (

      <div className="App" >

        {/* Iteration 1-3 */}
        
         {/* <Navbar />
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g Alex@yahoo.com" />  */}
        
        {/* Iteration 4 */}
        <Signup />
      <br/>
        <Message />


      </div>

    );

  }


}

export default App;
