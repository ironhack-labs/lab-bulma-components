import React, { Component } from "react";
import 'bulma/css/bulma.css'
import './app.css'
class App extends Component {
    render() {
        return(
            <div>
                <nav className="navbar is-fixed-top is-light">
                    <div class="navbar-brand">
                        <a className="navbar-item" href="https://bulma.io">
                            <img src="https://bulma.io/images/bulma-logo.png" alt="" width="112" height="28"/>
                        </a>
                        <a href="#" className="navbar-item">Home</a>
                    </div>    
                    
                    <div className="buttons navbar-end">
                        <a href="#" className="button is-primary">
                            <strong>Sign up</strong>
                        </a>
                        <a href="#" className="button is-info">
                            Log in
                        </a>
                    </div>              
                </nav>
                <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
                <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
                <CoolButton classes="button is-rounded is-danger is-small" text="Button 1"></CoolButton>
                <CoolButton classes="button is-small is-success" text="Button 2"></CoolButton>
            </div>            
        )
    }
}

class Signup extends Component {
    render() {
        return(
            <div>
                <nav className="navbar is-fixed-top is-light">
                    <div class="navbar-brand">
                        <a className="navbar-item" href="https://bulma.io">
                            <img src="https://bulma.io/images/bulma-logo.png" alt="" width="112" height="28"/>
                        </a>
                        <a href="#" className="navbar-item">Home</a>
                    </div>    
                    
                    <div className="buttons navbar-end">
                        <a href="#" className="button is-primary">
                            <strong>Sign up</strong>
                        </a>
                        <a href="#" className="button is-info">
                            Log in
                        </a>
                    </div>              
                </nav>
                <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
                <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
                <FormField label="Password" type="password" placeholder="your password" />
                <CoolButton classes="button is-rounded is-success is-small" text="Submit"></CoolButton>
            </div>            
        )
    }    
}

class FormField extends Component {
    render() {
        return (
            <div className="field">
                <label className="label">{this.props.label}</label>
                <div className="control">
                    <input className="input" type={this.props.type} placeholder={this.props.placeholder} />
                </div>
            </div>
        )
    }
}

class CoolButton extends Component {
    render() {
        return (
            <button className={this.props.classes}>{this.props.text}</button>
        )
    }
}

export default App;