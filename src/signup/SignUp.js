import 'bulma/css/bulma.css';

import './signup/SignUp.css'

import Navbar from './navbar/Navbar.js';
import FormField from './formfield/FormField.js';
import CoolButton from './coolbutton/CoolButton';

const SignUp = props => {

    return (

        <main>

            <section>
                <Navbar />
            </section>

            <div className="signUp">

                <form>
                    <FormField label="Name" type="text" placeholder="Name" />
                    <FormField label="Email" type="email" placeholder="Email" />
                    <FormField label="Password" type="password" placeholder="Password" />
                    <CoolButton className="button is-rounded my-class is-small is-dark sign-btn" text="Sign Up" />
                </form>

            </div>

        </main>


    )
}

export default SignUp 
