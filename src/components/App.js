import React from 'react';
import 'bulma/css/bulma.css';
import Navbar from './Navbar'
import FormField from './FormField'
import Signup from './Signup'
import Message from './Message'

const App = () => {
  return (
    <main>
    <Navbar/>
      <Signup />
      <hr/>
    <Message
        title="Hello World"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pallentesque risus mi."
        class="message is-info"
    />
      
      </main>
  )
}

export default App;
