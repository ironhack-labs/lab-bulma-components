import "./Signup.css"
import 'bulma/css/bulma.css'
import Navbar from "./Navbar"
import FormField from "./FormField"
import CoolButton from "./CoolButton"


const Signup = () => {
    return (   
        <div className="Signup">
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
                className="button is-rounded my-class is-small is-hovered is-primary"
                textButton="Signup"        
            />
        </div>       
                      
   )
}


export default Signup