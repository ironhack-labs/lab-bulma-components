import React from 'react'
import './signup.css'



function Signup () {

return (


<div>
<FormField label="name" type="text" placeholder="e.g Alex Smith" />
<FormField label="email" type="email" placeholder="e.g. alexsmith@gmail.com" />
 <FormField label="password" type="password" placeholder ="Your password plz"/>

 <CoolButton type="submit" isSmall isSuccess className="my-class">Ok!</CoolButton>

</div>



)

}













export default Signup