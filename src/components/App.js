import './App.css'
import 'bulma/css/bulma.css';
import Navbar from './Navbar'
import FormField from './FormField'
import CoolButton from './CoolButton'
import Signup from './Signup'




function App() {
  return (
    <>
      <div>
        <Navbar/>
      </div>
      <div>
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      </div>
      <div>
        <CoolButton/>
      </div>
      {/* <div>
        <Signup/>
      </div> */}
      </>
  )
}

export default App