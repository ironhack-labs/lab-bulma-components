import React, { Component } from "react";
import 'bulma/css/bulma.css';

class Formfield extends Component {

  render() {

    console.log("this.props", this.props)

    return (
      <div>
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input className="input" type="text" placeholder={this.props.userInfo.name} />
          </div>
        </div>
        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input className="input" type="email" placeholder={this.props.userInfo.email} />
          </div>
        </div>
        <div className="field">
          <label className="label">Password</label>
          <div className="control">
            <input className="input" type="password" placeholder="enter password" />
          </div>
        </div>

        <button className="button is-small is-success">Submit</button>
      </div>
    )
  }
}

export default Formfield;