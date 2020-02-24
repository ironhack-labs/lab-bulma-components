import React from 'react'
import logo from './logo.svg'
import './App.css'
import Navbar from './components/navbar/Navbar'
import FormField from './components/formfolder/FormField'
import CoolButton from './components/buttons/CoolButton'

function App() {
  return (
    <main>
      <Navbar></Navbar>

      
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      <FormField label="Password" type="password" placeholder="*******" />
      <CoolButton  class="button is-primary is-outlined" text="submitting"></CoolButton>

      <CoolButton  class="button is-danger is-rounded" text="Button 1"></CoolButton>
      <CoolButton  class="button is-success is-small" text="Button 2"></CoolButton>
    </main>
  )
}

export default App
