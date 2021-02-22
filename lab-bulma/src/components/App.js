import './App.css'
import Navbar from './Navbar.js'
import 'bulma/css/bulma.css'
import Formfield from './Formfield.js'
import CoolButton from './CoolButton.js'
import Signup from './signup'
import Message from './Message.js'

function App() {
  return (
    <>
<Navbar />
<Formfield label="Name" type="text" placeholder="Your name"/>
<Formfield label="Email" type="email" placeholder="Enter your email"/>

< CoolButton  typeButton="button is-danger is-rounded" text="Button 1"/>
< CoolButton  typeButton="button is-success is-hovered" text="Button 1"/>
<Signup/>
<Message title="Hello world" text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus mi."/>
</>

)
}

export default App
