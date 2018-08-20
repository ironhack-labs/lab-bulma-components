import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bulma/css/bulma.css';

class App extends React.Component {
  render() {
    return (
      <div>
      <button class="button is-rounded my-class is-danger is-small">Button 1</button>
      <button class="button is-small is-success">Button 2</button>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);