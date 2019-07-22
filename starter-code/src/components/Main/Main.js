import React, {Component} from 'react';
import './Main.css';
import Signup from '../Signup/Signup';

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <Signup />
      </div>
    );
  }
}

export default Main;