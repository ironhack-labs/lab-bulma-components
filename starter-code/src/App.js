import React, {Component} from 'react'
import {Button, 
  notification,
  Slider,
  Switch,
  Menu,
  Icon
} from 'antd'


import WrappedNormalLoginForm from './FormField'

class App extends Component {

  state = {
    disabled: false,
    current: 'home'
  };

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  disabledChange = () => {
    this.setState(prevState => ({ disabled: !prevState.disabled }));
  }

  openNotification = () => {
    
    notification.open({
      message: 'Hello World',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus mi.',
      onClick: () => {
        console.log('Notification Clicked!');
      },
    });
  };

  render() {

    const {disabled} = this.state

    return (

      <div>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal">
          <Menu.Item key="home">
            <Icon type="home" />Home
          </Menu.Item>  
          <Menu.Item key="login">
            <Icon type="login" />Login
          </Menu.Item>  
          <Menu.Item key="signup">
            <Icon type="user-add" />Signup
          </Menu.Item>  
        </Menu>
        <h1>
          AntD
        </h1>
        <Slider defaultValue={30} disabled={disabled} />
        <Button onClick={this.disabledChange}>Disable</Button>
        <Button onClick={this.openNotification}>Notificación</Button>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <WrappedNormalLoginForm />
      </div>
    )
  }

}

export default App;