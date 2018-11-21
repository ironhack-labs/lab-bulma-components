import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bulma/css/bulma.css';
import  Navbar  from './component/Navbar';
import  Main from './component/Main';

class App extends React.Component{
  render() {
    return (
      <div className="App">
        <Navbar />
        <Main />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);