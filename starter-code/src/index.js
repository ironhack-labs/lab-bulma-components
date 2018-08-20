import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bulma/css/bulma.css';
import {Navbar} from "./components/Navbar"
import {Button} from 'react-bulma-components';
import {Form} from './components/Form';
import Button2 from './components/Button';
import {FormField} from 'react-bulma-components';
import './index.css';

class App extends Component {
  render() {
    return (
      <div className = 'App'>
        <Navbar/>
        <Button className="button is-rounded my-class is-small is-danger">Button 1</Button>
        <Button className="button is-small is-success">Button 2</Button>
        <br/>
        <Button2 />
        <Form/>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);