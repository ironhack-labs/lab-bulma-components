import React from 'react';
import ReactDOM from 'react-dom';

import 'bulma/css/bulma.css';

const Message = props => {
    let classStr = "message";
    if (props.isInfo) classStr += " is-info"
    return (
        <article className={classStr}>
            <div className="message-header">
                <p>{props.label}</p>
                <button className="delete" aria-label="delete"></button>
            </div>
            <div className="message-body">
                {props.children}
            </div>
        </article>
    )
}

const CoolButton = props => {
    console.log(props);
    // return <button className={`${props.isSmall && 'is-small'}`}>{props.name}</button > --- Iulia's suggestion. Clever use of && operand
    let classStr = "button";
    let method;
    if (props.isSmall) classStr += " is-small";
    if (props.isDanger) classStr += " is-danger";
    if (props.isSuccess) classStr += " is-success";
    if (props.isRounded) classStr += " is-rounded";
    // If an object of different paramaters was the input, as opposed to the boolean check, then use "For...In loop" to loop through input object
    return <button method={method} className={classStr} type="submit">{props.name}</button >
}


const FormField = props => {
    return (
        <div className="field">
            <label className="label">{props.type.label}</label>
            <div className="control">
                <input className="input" type={props.type.type} placeholder={props.type.placeholder} />
            </div>
        </div>
    )
}

const Navbar = () => {
    return (
        <nav className="navbar is-transparent">
            <div className="navbar-brand">
                <a className="navbar-item" href="https://bulma.io">
                    <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"></img>
                </a>
            </div>

            <div id="navbarExampleTransparentExample" className="navbar-menu">
                <div className="navbar-start">
                    <a className="navbar-item" href="https://bulma.io/">
                        Home
                    </a>
                </div>
            </div>

            <div className="navbar-end">
                <div className="navbar-item">
                    <div className="field is-grouped">
                        <CoolButton isSmall isDanger isRounded name="Login" />
                        <CoolButton isSmall isSuccess name="Sign-up" />
                    </div>
                </div>
            </div>
        </nav>
    )
}

const App = props => {
    return (
        <div>
            <Navbar />
            <FormField type={{
                label: "Name",
                type: "text",
                placeholder: "e.g Alex Smith"
            }} />
            <FormField type={{
                label: "Email",
                type: "email",
                placeholder: "e.g. alexsmith@gmail.com"
            }} />
        </div>
    )
}

const SignupPage = props => {
    return (
        <div>
            <Navbar />
            <form>
                <FormField type={{
                    label: "Name",
                    type: "text",
                    placeholder: "e.g Alex Smith"
                }} />
                <FormField type={{
                    label: "Email",
                    type: "email",
                    placeholder: "e.g. alexsmith@gmail.com"
                }} />
                <FormField type={{
                    label: "Password",
                    type: "password",
                }} />
                <CoolButton isSmall isSuccess isRounded name="Submit" />
            </form>
            <Message isInfo label="Hello World">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.</Message>
        </div>
    )
}

export default SignupPage;
// export default App;