import React, { Component } from 'react'
import 'bulma/css/bulma.css';
import FormField from "./FormField"
import CoolButton from './CoolButton'

export default class Nav extends Component {

  constructor(props) {
    super(props)
    
    this.state = {
    "displayLogin": "none",
    "displaySignup": "none"
    }
  }

  onclickFunctionL = () => {
    if(this.state.displayLogin === "none")
    {
      this.setState({
        displayLogin: "block"
      })
    } else {
      this.setState({
        displayLogin: "none"
      })
    }
  }

  onclickFunctionS = () => {
    if(this.state.displaySignup === "none")
    {
      this.setState({
        displaySignup: "block"
      })
    } else {
      this.setState({
        displaySignup: "none"
      })
    }
  }

  render() {
    return (
      <div>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" width={112} height={28} />
          </a>
        </div>
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item">
              Home
            </a>
          </div>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <div className="sl-container">
              <CoolButton type="is-danger" name="Signup" func={this.onclickFunctionS}/>
              <div style={{ display: this.state.displaySignup }}>
                <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
                <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
                <FormField label="Password" type="password" />
                <CoolButton type="is-danger" name="Submit" />
              </div>
              <div className="sl-container">
              </div>
              <CoolButton type="is-success" name="Login" func={this.onclickFunctionL}/>
              <div style={{ display: this.state.displayLogin }}>
                <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
                <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
              </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
    );
  }
}






//       <div>
//         <nav>
//           <a href="#home"></a>
//           <div>
//             <button  onClick={this.onclickFunction}>login</button>
//             <div style={{ display: this.state.display }}>
//             <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
//             <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
//           </div>
            
//             <button>signup</button>
//           </div>
//         </nav>
//       </div>
//     )
//   }
// }
