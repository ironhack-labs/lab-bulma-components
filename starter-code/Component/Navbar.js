import React, { Component} from  'react';
import {Menu,Icon, Row,Col,Button} from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Navbar extends Component{
  state = {
    current: 'mail',
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  render() {
    return(


        <Menu

          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >
          <Menu.Item key="mail">
            <img src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" width="50" height="55" alt="logo"/>
          </Menu.Item>
          <Menu.Item key="logo">
            <img src="https://gw.alipayobjects.com/zos/rmsportal/DkKNubTaaVsKURhcVGkh.svg" width="50" height="55"  alt=""/>
          </Menu.Item>
          <Menu.Item key="home">
            <Icon type="home" />  Home
          </Menu.Item>
          <Menu.Item key="login" >
            <Button type="primary" ghost>Login</Button>
          </Menu.Item>
          <Menu.Item key="signup" >
            <Button type="primary">SignUp</Button>
          </Menu.Item>
        </Menu>

    );
  }
}

export default Navbar;