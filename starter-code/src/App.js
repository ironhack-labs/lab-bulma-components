import React from "react";
import 'bulma/css/bulma.css';

const CoolButton = props =>{
    const btnClass = `button ${props.className} ${props.isSmall && 'is-small'} ${props.isDanger && 'is-danger'} ${props.isSuccess && 'is-success'}`
return (<button className={btnClass}>{props.children}</button>)
}

const Navbar = () => {
    return (<nav className="navbar is-transparent">
        <div className="navbar-brand">
            <a className="navbar-item" href="/">
                <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
            </a>
            <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        <div id="navbarExampleTransparentExample" className="navbar-menu">
            <div className="navbar-start">
                <a className="navbar-item" href="https://bulma.io/">
                    Home
                </a>
            </div>
            <div className="navbar-end">
                <div className="navbar-item">
                    <div className="field is-grouped">
                    <p className="control">
                        <CoolButton isSmall isDanger className="is-rounded my-class">Login</CoolButton>
                    </p>
                    <p className="control">
                        <CoolButton isSmall isSuccess>Signup</CoolButton>
                    </p>
                    </div>
                </div>
            </div>
        </div>
    </nav>);
}

const FormField = props => {
    console.log(props)
return (<div className="field">
<label className="label">{props.label}</label>
<div className="control">
  <input className="input" type={props.type} placeholder={props.placeholder} />
</div>
</div>)
}

const Signup = () => {
    return( <div>
        <Navbar />
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <FormField label="Password" type="password" placeholder="********" />
        <CoolButton isSmall isSuccess>Submit</CoolButton>
    </div>)
}

const Message = props =>{
return(<article className={`message ${props.isInfo && 'is-info'}`}>
<div className="message-header">
<p>{props.title}</p>
  <button className="delete" aria-label="delete"></button>
</div>
<div className="message-body">
{props.children}
</div>
</article>)
}


const Container=()=>{
    return (<div className="container">
        <Message isInfo title="Hello World">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
</Message>
        </div>)
}
const App = () => {
  return(
      <div>
          <Signup/>
          <Container />
      </div>
  );
};

export default App;
