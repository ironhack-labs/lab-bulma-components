import CoolButton from '../coolButton/CoolButton'
import Navbar from '../navbar/Navbar'
import FormField from '../formField/FormField'

import 'bulma/css/bulma.css';

const Signup = () => {

    return (
    <>

        <Navbar />
        <FormField label="Name" type="text" placeholder="e.g Mr. Catboss" />
        <FormField label="Email" type="email" placeholder="e.g. catboss@miaw.com" />
        <FormField label="Password" type="password" placeholder="Password" />
        <div class="control">
            <CoolButton isPrimary btnName="Submit" />
        </div>

    </>
    )
}

export default Signup