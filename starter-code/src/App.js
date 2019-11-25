import React from 'react'   //newly Node-supported ES6 
import ReactDOM from 'react-dom';

const Navbar = () => {
    return (
        <nav className="navbar is-transparent">
        <div className="navbar-brand">
            <a className="navbar-item" href="https://bulma.io">
                <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
            </a>
        </div>

        <div id="navbarExampleTransparentExample" className="navbar-menu">
            <div className="navbar-start">
                <a className="navbar-item" href="https://bulma.io/">Home</a>
            </div>
        </div>

        <div className="navbar-end">
            <div className="navbar-item">
                <div className="field is-grouped">
                    <CoolButton isSmall isDanger button isRounded label="Cool"/>
                    <CoolButton isSmall isSuccess button label="Login"/>
                </div>
            </div>
            </div>
    </nav>
    )
}

const FormField = (props) => {
    return (
        <div className="field">
            <label className="label">{props.type.label}</label>
            <div className="control">
                <input className="input" type={props.type.type} placeholder={props.type.placeholder} />
            </div>
        </div>
    );
}

const CoolButton = props => {
    let className = "";
    console.log(props);
    
    if (props.isSmall) {
        className = className + " " + "is-small";
    }

    if (props.isDanger) {
        className = className + " " + "is-danger";
    }

    if (props.button) {
        className = className + " " + "button";
    }

    if (props.isRounded) {
        className = className + " " + "is-rounded";
    }

    if (props.isSuccess) {
        className = className + " " + "is-success";
    }

    return (
    <button className={className}>{props.label}</button>
    )
}

const Signup = props => {
    return (
        <div>
            <Navbar/>
            <FormField type= {{
            label: "Username",
            type: "text",
            placeholder: "e.g. Alex Smith"
            }}/>
            <FormField type= {{
            label: "Password",
            type: "text",
            placeholder: "password"
            }}/>
            <FormField type= {{
            label: "Password",
            type: "text",
            placeholder: "password"
            }}/>
            <CoolButton isSmall isSuccess button label="Signup"/>
        </div>
    )
}

const App = () => {
    return (
    <div>
        <Signup/>
    </div>
    )
};
  
export default App;