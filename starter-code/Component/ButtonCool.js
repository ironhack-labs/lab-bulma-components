import  React, {Component} from  'react';
import {Button} from "antd";

class ButtonCool extends Component {
  state = {
    size: 'large'
  };

  render() {
    const size = this.state.size;
    console.log('style en cool',this.props);
    return (
      <div>

        <Button type={this.props.style} shape="round"size={size}>CoolBotton</Button>

      </div>


  );
  }

}

export default ButtonCool;