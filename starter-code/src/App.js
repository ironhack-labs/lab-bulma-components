import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Navbar from '../components/Navbar/Navbar';
import FormField from '../components/FormField/FormField'
import CoolButton from '../components/CoolButton/CoolButton'
import './App.css'

class App extends Component {
  render(){
    return (
    <div>
      <Navbar />
      <form >
        <FormField 
          label="Name" 
          type="text" 
          placeholder="e.g Alex Smith" 
        />
        <FormField 
          label="Email" 
          type="email" 
          placeholder="e.g. alexsmith@gmail.com" 
        />
        <CoolButton isActive isMedium isSuccess>Send</CoolButton>
    </form>
    </div>
    )
  }
}


export default App