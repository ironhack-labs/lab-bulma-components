import React, { Component } from 'react'

class Form extends Component {
  render() {
   return (
    <form>
      <div className="field">
        <label className="label">Name</label>
        <div className="control">
        <input className="input" type="text" placeholder="Joseph Frag" />
       </div>
     </div>
       <div className="field">
         <label className="label">Email</label>
       <div className="control">
        <input className="input" type="email" placeholder="Joseph@email.com" />
       </div>
       </div>
    </form>
   )
  }
}
export default Form