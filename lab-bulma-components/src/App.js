import React from 'react'
import logo from './logo.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import FormField from './components/FormField/FormField'
import Button from './components/Button/Button'
import Signup from './components/Signup/Signup'
import Message from './components/Message/Message'

function App() {
  return (

    <main>

    <section>
    <Navbar> </Navbar> 
    </section>

      <section className='field form'>

       <FormField  label="Name"  type ="text"  placeholder ="eg Alex Smith"/>
       <FormField  label="Email"  type ="email"  placeholder="eg alexsmith@gmail.com"/>

      </section>

    <section>
        <FormField> </FormField>
    </section>

    {/* <section >
    <Button></Button>
      </section> */}
      
    <section >
      <Signup></Signup>
    </section>

      
    <Message isInfo title='Hello World'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
    </Message>

    </main>

  )
}

export default App