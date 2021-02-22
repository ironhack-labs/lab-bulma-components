import 'bulma/css/bulma.css';
import './Signup.css';
import Navbar from "./Navbar.js"
import FormField from "./FormField.js"
import CoolButton from './CoolButton.js'

const Signup = () => {
    return (
        <>
        <Navbar />
        <div className="form">
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g alexsmith@gmail.com" />
        <FormField label="Password" type="password"/>
        <CoolButton classProperties="button is-primary my-class is-fullwidth" text="Login" type="submit"/>
        </div>
        </>
    )
}

export default Signup