import React, {Component} from 'react';
import './App.css'

class App extends Component{
    state = { //state es una maldita variable
        modalIsClosed: true
    }

    openModal=()=> {
        this.setState({modalIsClosed: false});
    }
    
      closeModal=()=> {
        this.setState({modalIsClosed: true});
      }

    render(){
        return(
            <div className='App'>
                <nav className="navbar is-light">
                    <div className="navbar-brand">
                        <a className="navbar-item" href="https://bulma.io">
                        <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
                        </a>
                        <div className="navbar-burger burger" data-target="navbarExampleTransparentExample"></div>
                    </div>

                    <div id="navbarExampleTransparentExample" className="navbar-menu">
                        <div className="navbar-start">
                            <a className="navbar-item" href="https://bulma.io/">Home</a>
                        </div>
                        <div className="navbar-end">
                            <div className="navbar-item">
                                <div className="field is-grouped">
                                <p className="control">
                                    <button className="button is-rounded my-class is-danger is-small">Login</button>
                                </p>
                                <p className="control">
                                    <button className="button is-small is-success">Signup</button>
                                </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                
                <form className="campos">
                    <div className="field">
                        <label className="label">Name</label>
                        <div className="control">
                            <input className="input" type="text" placeholder="e.g Alex Smith"/>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Email</label>
                        <div className="control">
                            <input className="input" type="email" placeholder="e.g. alexsmith@gmail.com"/>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Password</label>
                        <div className="control">
                            <input className="input" type="password" placeholder="Your password"/>
                        </div>
                    </div>
                    <div className="control">
                        <a className="button is-primary" onClick={this.openModal}>Submit</a>
                    </div>
                </form>
                {this.modalIsClosed ? <article className="message">
                        <div className="message-header">
                            <p>Hello World</p>
                            <button className="delete" aria-label="delete"></button>
                        </div>
                        <div className="message-body">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
                        </div>
                    </article>:<h1>aaaa</h1>
                }

            </div>
        )
    }
}

export default App;