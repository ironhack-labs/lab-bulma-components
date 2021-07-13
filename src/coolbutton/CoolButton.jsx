import React from 'react'
import './CoolButton.css'


function CoolButton () {

return (

<div>
<button className="button is-primary {props.className}">{props.children}</button>


</div>
)


} 


export default CoolButton