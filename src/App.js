import React from 'react'
import Navbar from './navbar/Navbar'
import FormField from './formField/FormField'
import CoolButton from './coolButton/CoolButton'
import Signup from './signup/Signup'
import Message from './message/Message'
import 'bulma/css/bulma.css'
import './App.css'



const App = () => {
  return (
    <main>
      
      <Navbar />

      
      <h3><strong>Iteration 2 | FormField component</strong></h3>
      
      <div className="iteration2">
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g alexsmith@gmail.com" />
      </div>

      
      <h3><strong>Iteration 3 | CoolButton Component</strong></h3>
      
      <div className="iteration3">
        <CoolButton
          name="Button 1"
          className="is-rounded my-class"
          size="is-small"
          color="is-danger"
        />

        <CoolButton
          name="Button 2"
          size="is-small"
          color="is-success"
        />
      </div>

      
      <h3><strong>Iteration 4 | A Signup Page</strong></h3>
      <Signup />
      

      <h3><strong>Iteration 5 | Bonus</strong></h3>
      <Message
        title="Hello World"
        bodyMsg="Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>."
        color="is-info"
      />

    </main>
  )
}



export default App
