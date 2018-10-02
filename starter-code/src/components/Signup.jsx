import React, { Component } from 'react'

class Signup extends Component {
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

       <div className="field">
         <label className="label">Password</label>
       <div className="control">
        <input className="input" type="password" placeholder="password" />
       </div>
       </div>

       <input type='submit' className="button is-small is-success">Crear</input>

    </form>
   )
  }
}
export default Signup