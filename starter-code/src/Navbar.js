import React, { Component } from 'react';
import {Menu} from 'antd';

class Navbar extends Component {
  render() {
    return(
    <Menu
      mode="horizontal"
      defaultSelectedKeys={['3']}
    >
      <Menu.Item key='1'>Menu</Menu.Item>
      <Menu.Item key='2'>Login</Menu.Item>
      <Menu.Item key='3'>Signup</Menu.Item>
    </Menu>
    );
  }
}

export default Navbar;