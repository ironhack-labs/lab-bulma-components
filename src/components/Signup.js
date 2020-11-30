import Navbar from './Navbar'
import Formfield from './FormField'
import CoolButton from './CoolButton'
import 'bulma/css/bulma.css'
import './Signup.css'


const Signup = () => {
    return (
        <>
            <Navbar
                logoLink="https://bulma.io"
                logo="https://bulma.io/images/bulma-logo.png"
                logoAlt="Bulma: a modern CSS framework based on Flexbox"
                homeLink="https://bulma.io/"
                loginBtn="#"
                signupBtn="#"
            />
            <form>
                <Formfield 
                    label="Name"
                    type="text"
                    placeholder="e. g. John Doe"
                />
                <Formfield
                    label="Email"
                    type="email"
                    placeholder="e. g. example@example.com"
                />
                <Formfield
                    label="Password"
                    type="text"
                />
                <CoolButton class="button is-centered is-primary is-fullwidth" type="submit" text="Submit" />
            </form>
            
        </>
    )
}

export default Signup