import React, {Component} from 'react'
import {
  Button,
} from 'antd';

class CoolButton extends Component {

  render() {

    return(
      <Button type="primary" htmlType="submit" className="login-form-button">
        Signup
      </Button>
  )
  }
}



export default CoolButton;