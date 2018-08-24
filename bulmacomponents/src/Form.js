import React, { Component } from "react";
import 'bulma/css/bulma.css'


class Form extends Component {
    render(){
        return(
            <div className="columns">
            <div className="column is-half is-offset-one-quarter">
            <div className="field">
                <p className="control has-icons-left has-icons-right">
                    <input className="input" type="email" placeholder="Email"/>
                    <span className="icon is-small is-left">
                    <i className="fas fa-envelope"></i>
                    </span>
                    <span className="icon is-small is-right">
                    <i className="fas fa-check"></i>
                    </span>
                </p>
                </div>
                <div className="field">
                <p className="control has-icons-left">
                    <input className="input" type="password" placeholder="Password"/>
                    <span className="icon is-small is-left">
                    <i className="fas fa-lock"></i>
                    </span>
                </p>
                </div>
                <div className="field">
                <p className="control">
                    <button className="button is-success is-normal is-fullwidth">
                    Login
                    </button>
                </p>
                </div>
                </div>
            </div>
        )
    }
}

export default Form;