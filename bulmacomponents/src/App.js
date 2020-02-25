import React from 'react';
import './App.css';
import NavBar from './components/navbar/navbar';
import FormField from './components/formfield/formfield';
import Button from './components/button/button';
import SignUp from './components/signup/signup';
import Message from './components/message/message';

function App() {
  return (

    <>
    <div id="nav2">
    <NavBar button1="Login" button2="Signup"></NavBar>
    <div>
    <Button class="button is-small is-info my-class" text="Login"></Button>
    <Button class="button is-small is-primary" text="Signup"></Button>
    </div>
    </div>  
    <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
    <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
    <SignUp label="Password" type="password" placeholder="Insert your password" class="button is-small is-primary" text="Enviar"></SignUp>
    <br></br>
    <br></br>
    <Button class="button is-small is-danger my-class" text="Button 1"></Button>
    <Button class="button is-small is-success" text="Button2"></Button>
    <br></br><br></br>
    <Message title="Hello World" messagebody="Lorem ipsum dolor sit amet, consectetur adipiscing elit." messagestrong="Pellentesque risus mi"></Message>
    </>
  )

}

export default App;
