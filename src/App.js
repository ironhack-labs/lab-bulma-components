import React from 'react';
import Navbar from './navbar/Navbar.js'
import FormField from './formfield/FormField.js'
import CoolButton from './CoolButton/CoolButton.js'
import Signup from './Signup/Signup.js'
import Message from './Message/Message.js'

const App = () => {
  return (
  <div>
  <Navbar />
  <Message isInfo title="Hello World"> Lorem iPum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
  </Message>
  <div className="message">  
  <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
  <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
  </div>
  <CoolButton className="button is-primary isSmall">Button 1</CoolButton>
  <CoolButton className="button is-danger isSmall">Button 2</CoolButton> 
  <Signup></Signup>
  </div>
  )
};

export default App;
