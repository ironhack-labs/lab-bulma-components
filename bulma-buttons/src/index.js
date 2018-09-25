import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Navbar from './Navbar';
import Formfield from './Formfield';
import registerServiceWorker from './registerServiceWorker';

// import 'bulma/css/bulma.css';

ReactDOM.render(
  <div>
    <App />
  </div>
  , document.getElementById('root'));
registerServiceWorker();
