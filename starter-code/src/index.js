import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bulma/css/bulma.css'

class App extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <Container />
      </div>
    );
  }
}

class Nav extends React.Component {
  render() {
    return (
    <div class="navbar is-transparent">
      <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
    </a>
  </div>

  <div id="navbarExampleTransparentExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item" href="https://bulma.io/">
        Home
      </a>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="field is-grouped">
          <p class="control">
            <Button className="button is-primary">Login</Button>
          </p>
          <p class="control">
            <Button className="button is-info">Signup</Button>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
    )
  }
}

class Button extends React.Component {
  render() {
    return (
      <button className={this.props.className} type={this.props.type}>{this.props.children}</button>
    )
  }
}

class Form extends React.Component {
  render() {
    return (
      <div>
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g alex.smith@email.com" />
        <FormField label="Password" type="password" placeholder="Chose a password" />
        <Button className="button is-primary" type="submit">Submit</Button>
      </div>
    )
  }
}

class FormField extends React.Component {
  render () {
    return (
      <div class="field">
        <label class="label">{this.props.label}</label>
        <div class="control">
          <input class="input" type={this.props.type} placeholder={this.props.placeholder}/>
        </div>
      </div>
    )
  }
}


class Container extends React.Component {
  render() {
    return (
      <div className="container">
        <Form />
        <Message />
      </div>
    )
  }
}

class Message extends React.Component {
  render() {
    return (
      <article class="message is-primary">
        <div class="message-header">
          <p>Link</p>
          <button class="delete" aria-label="delete"></button>
        </div>
        <div class="message-body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
        </div>
      </article>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);