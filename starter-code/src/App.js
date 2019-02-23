import React, { Component } from "react";
import { Menu, Icon, Button, Input } from 'antd';
import "./App.css"

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class App extends Component{
  state = {
    current: 'mail',
    loading: false,
    iconLoading: false
  }

  constructor(props) {
    super(props);
    this.state = {
      userName: '',
    };
  }

  emitEmpty = () => {
    this.userNameInput.focus();
    this.setState({ userName: '' });
  }

  onChangeUserName = (e) => {
    this.setState({ userName: e.target.value });
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  enterLoading = () => {
    this.setState({ loading: true });
  }

  enterIconLoading = () => {
    this.setState({ iconLoading: true });
  }

  render(){
    const { userName } = this.state;
    const size = this.state.size;
    const suffix = userName ? <Icon type="close-circle" onClick={this.emitEmpty} /> : null;
    return(
      <div>
        <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal" className="nav">
          <Menu.Item>
            <img src="../ironLogo.jpg" alt="" className="logo"/>
          </Menu.Item>
          <Menu.Item key="mail">
            <a href="#">Home</a>
          </Menu.Item>
          <Menu.Item className="login-button">
            <Button type="primary" loading={this.state.loading} onClick={this.enterLoading} >
              Log in
            </Button>
          </Menu.Item>
          <Menu.Item key="alipay">
            <Button type="danger">Sign Up</Button>
          </Menu.Item>
        </Menu>
        <div id="inputs">
          <div id="inner-input">
            <h3>User Name</h3>
            <Input
              placeholder="Enter your username"
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              suffix={suffix}
              value={userName}
              onChange={this.onChangeUserName}
              ref={node => this.userNameInput = node}
            />
            <h3 id="hardcoded-style">Password</h3>
            <Input.Password placeholder="input password" />
            <div className="buttons">
              <Button type="dashed" size={size}>Log In</Button>
              <Button type="danger">Sign Up</Button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;