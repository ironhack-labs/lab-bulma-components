import React from "react";

class Form extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="formDad">
<div className="field">
  <label className="label colorLabel">Name</label>
  <div className="control">
    <input className="input" type="text" placeholder="Tu fucking nombre"/>
  </div>
</div>
<div className="field">
  <label className="label colorLabel">Email</label>
  <div className="control">
    <input className="input" type="email" placeholder="Tu fucking email"/>
  </div>
</div>
<div className="field">
  <label className="label colorLabel">Password</label>
  <div className="control">
    <input className="input" type="password" placeholder="Tu fucking password"/>
  </div>
</div>

</div>
    );
  }
}
export default Form;