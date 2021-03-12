import 'bulma/css/bulma.css';
import React from 'react';
import Navbar from './navbar/Navbar'
import FormField from './formfield/FormField'
import Button from './buttons/buttons.js'


const Signup = ( ) => { 

return ( <div>
<Navbar/> 
<FormField label="Name"  type="text"  placeholder="e.g Alex Smith" />;
<FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />;
<FormField label="password" type="password" placeholder="********" /    >;

<Button isSmall isDanger className="is-rounded my-class"> Button 1</Button>

</div>
)}

export default Signup;