import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bulma/css/bulma.css';
import  Navbar  from './component/Navbar';
import  FormField  from './component/FormField';
import  Message from './component/Message';


import { Button } from 'react-bulma-components';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <br/>
        <br/>
        <FormField />
        <br/>
        <div className= "has-text-centered">
        <Button className="button is-medium is-link">Enviar</Button>
        </div>
        <br/>
        <Message />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);