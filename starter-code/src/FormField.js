import React, { Component } from 'react';

class FormField extends Component {  
  constructor () {
      super()
      this.state = {
          isHidden: true
      }
  }
  toggleHidden () {
      this.setState({
          isHidden: !this.state.isHidden
      })
  }

    render() {
      return (
        <div className="nav-button" >
            <button class="button is-primary" onClick={this.toggleHidden.bind(this)}>
            Login
            </button>
            {!this.state.isHidden && <Child />}
        </div>
      )
    }
}

const Child = () => (

        <section className="forms">

        <h1 class="title-form">Login to Account</h1>

        <div class="field">
        <label class="label">Name</label>
        <div class="control">
            <input class="input" type="text" placeholder="e.g Alex Smith" />
        </div>
        </div>

        <div class="field">
        <label class="label">Email</label>
        <div class="control">
            <input class="input" type="email" placeholder="e.g. alexsmith@gmail.com" />
        </div>
        </div>

        <div class="login-button">
        <a class="button is-dark" href="#"><span>Login</span></a>
        </div>

        </section>
)


export default FormField;