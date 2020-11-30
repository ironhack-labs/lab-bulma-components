import 'bulma/css/bulma.css';

import Navbar from '../navbar/Navbar'
import FormField from '../formfield/FormField'
import CoolButton from '../coolbutton/CoolButton'

const SignUp =  props => {

    return (
        <form class="control">
            <Navbar />
            <h2 class="has-text-centered has-text-weight-bold is-size-3">Sign Up</h2>
                
            <FormField label="Name" type="name" placeholder="e.g Alex Smith"></FormField> 
            <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com"></FormField> 
            <FormField label="Password" type="password" placeholder="*********"></FormField> 
           
            <CoolButton type="submit" class="button is-success is-medium is-fullwidth" name="Submit"></CoolButton>  
      
        </form>
    )
}



export default SignUp

