import React from 'react'

const FormField = props => {
    return (
<>        
<div class="field">
  <label class="label">Name</label>
  <div class="control">
    <input class="input" type="text" placeholder={props.name} />
  </div>
</div>
<div class="field">
  <label class="label">Email</label>
  <div class="control">
    <input class="input" type="email" placeholder={props.email} />
  </div>
  <label class="label">Password</label>
    <div class="control">
    <input class="input" type="password" placeholder={props.password} />
  </div>
</div>
</>


    )
}

export default FormField