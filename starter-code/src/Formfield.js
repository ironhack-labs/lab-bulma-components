import React from "react";
import "./App.css";

const Formfield = () => {
  return (
    <div className="formfield">
      <p>Name</p>
      <input className="input" label="Name" type="text" placeholder="e.g Alex Smith" />
      <p>Email</p>
      <input className="input" label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
    </div>
  );
}

export default Formfield;