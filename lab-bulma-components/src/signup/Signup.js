import 'bulma/css/bulma.css'
import FormField from '../formfield/FormField'
import CoolButton from '../coolbutton/CoolButton'
import './Signup.css'

const Signup = props => {
    return (
        <section className = "form-container">
            <h3>Sign up</h3>
            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com.com" />
            <FormField label="Password" type="password" placeholder="******" />
            <CoolButton isSmall isSuccess name="Sign up"/>
        </section>
    )
}
export default Signup
