import React from 'react';

import 'bulma/css/bulma.css'
import Navbar from '../components/navbar/Navbar';
import FormField from '../components/formfield/FormField'
import CoolButton from '../components/coolbutton/CoolButton'



function Signup() {
    return (
<div>

<Navbar/>
<FormField label="Name" type="text" placeholder="e.g Alex Smith" />
<FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
<CoolButton type="submit" styleClass="button my-class is-success" text="submit"/>
</div>



    )}
export default Signup 