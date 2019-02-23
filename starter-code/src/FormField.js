import React, { Component } from 'react';
import { Form, Input, Button, notification, Menu } from 'antd';
const { Item } = Form;

class FormField extends Component {
  openNotification = () => {
    notification.open({
      message: "hehe",
      description: "This doesn't do anything but thanks for clicking",
      onClick: () => {
        console.log('Notification Clicked!');
      }
    });
  }

  render() {
    return (
      <div className="formContainer">
        <Form
          className="login-form"
          layout="vertical"
        >
          <Item>
            <Input type="email" placeholder="Email address" />
          </Item>
          <Item>
            <Input type="text" placeholder="Username" />
          </Item>
          <Item>
            <Input.Password type="password" placeholder="Password" />
          </Item>
          <Button className="btn-submit" type="primary" onClick={this.openNotification}>Click me!</Button>
        </Form>
      </div>
    );
  }
}

export default FormField;