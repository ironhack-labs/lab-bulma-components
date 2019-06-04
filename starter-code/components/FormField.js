import React from 'react'

// Los componentes funcionales sólo retornan JSX, no tienen método render() ni pueden tener state
const User = () =>

  <form>
      <div className="field">
        <label className="label">Name</label>
        <div className="control">
        <input className="input" type="text" placeholder="e.g. Alex Smith"/>
        </div>
      </div>
      <div className="field">
        <label className="label">Email</label>
        <div className="control">
        <input className="input" type="email" placeholder="e.g. alexsmith@gmail.com"/>
        </div>
      </div>
  </form>


export default User;