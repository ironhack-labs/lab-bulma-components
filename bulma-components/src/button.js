import React, {Component} from 'react';
import './button.css';
import FormField from './formField';

class CoolButton extends Component {
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
      <div>
        <button className={this.props.btn} onClick={this.toggleHidden.bind(this)}>
          {this.props.auth}
        </button>
        {!this.state.isHidden && <Child />}
      </div>
    );
  }
}
const Child = () => (
  <div>
    <FormField labelName="Name" type="text" placeHolder="Boba Fett"></FormField>
    <FormField labelName="Email" type="email" placeHolder="BFett@imgoingin.com"></FormField>
  </div>
  );
  
export default CoolButton;