import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import FormField from './components/FormField';
import CoolButton from './components/CoolButton';
import Signup from './components/Signup';
import Message from './components/Message';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {}
}

  render(){
    return (
      <div className="App">
      <Navbar />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      <CoolButton  className='is-rounded  my-class is-danger is-small'>Button 1</CoolButton>
      <CoolButton  className='is-small is-success'>Button 2</CoolButton>


      <div className="theSignUpPage">
      <h1>Sign Up</h1>
      <Signup />
      </div>
      
      <div className="messageDiv">
      <Message title="Hello World">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.</Message>
       </div>
      
       </div>
    );
  }

}

export default App;
