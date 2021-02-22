import CoolButton from '../coolButton/CoolButton'
import Navbar from '../navbar/Navbar'
import FormField from '../formField/FormField'

import 'bulma/css/bulma.css';

const Signup = () => {
    <>

    <Navbar />
    <FormField label="Name" type="text" placeholder="e.g Mr. Catboss" />
    <FormField label="Email" type="email" placeholder="e.g. catboss@miaw.com" />
    <FormField label="Password" type="password" placeholder="Password" />
    <div class="control">
        <button class="button is-primary">Submit</button>
    </div>

    </>
}

