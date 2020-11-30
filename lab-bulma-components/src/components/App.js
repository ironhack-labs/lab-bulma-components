import './App.css';
import Navbar from "./Navbar"
import FormField from "./FormField"
import CoolButton from "./CoolButton"
import Signup from "./Signup"
import Message from "./Message"

function App() {
  return (
    <div>
      <Navbar />   
      <FormField
        label="Name"
        type="text"
        placeholder="e.g Alex Smith"
      />
      <FormField
        label="Email"
        type="email"
        placeholder="e.g alexsmith@gmail.com"
      />
      <CoolButton
        className="button is-rounded my-class is-small is-hovered"
        textButton="Signup"        
      />
      <Signup /> 
      <Message isInfo title='Hello World'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong></Message>
    </div>
  )
}

export default App;
