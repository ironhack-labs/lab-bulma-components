import React from "react";
import Popup from "reactjs-popup";
 
export default () => (
  <Popup trigger={<a className="button is-primary" >  Sign Up</a>}>
    <div>
    <label htmlFor="">name</label>
    <input className="input" type="text" placeholder="Eminen"/>

    <label htmlFor="">email</label>
    <input className="input" type="emal" placeholder="IrocnHack123@outlook.com"/>

    <label htmlFor="">password</label>
    <input className="input" type="password" placeholder="IrocnHack123@"/>

    <a class="button is-success">Login</a>

    </div>
  </Popup>
);