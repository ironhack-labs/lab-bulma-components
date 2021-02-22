import './Signup.css'
import Navbar from '../navbar/Navbar'
import FormField from '../formfield/Formfield'
import CoolButton from '../coolbutton/CoolButton'
import 'bulma/css/bulma.css'

const Signup = () => {
    return ( 
        <>
  <Navbar></Navbar>
  <FormField 
  label="Name"
  type="text"
  placeholder="eg Alex Smith"
  />
  <FormField
    label="Email"
    type="email"
    placeholder="eg alexsmith@gmail.com"
  />
    <FormField
    label="Password"
    type="Password"
    placeholder="password"
  />
  
  
  <CoolButton className="button is-rounded my-class is-danger is-large" text="Submit"/>

  

  </>

    )

}
export default Signup