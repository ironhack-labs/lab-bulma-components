import React,  {Component} from 'react';
import { Button, notification,Slider,Row, Col } from 'antd';
import Login from "../Component/Login";
import Navbar from "../Component/Navbar";

class App extends Component{
  state = {
    disabled: false
  };

  disableChange = () => {
    this.setState(prevState => ({
      disabled: !prevState.disabled
    }))
  }

  notification = () => {
    notification.open({
      message: 'Notification Title',
      description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      onClick: () => {
        console.log('Notification Clicked!');
      },
    });
  }
  render() {
    const {disabled} =this.state;
    return(
      <div>
        {/*<h1>ANt </h1>*/}
        {/*<Slider defaultValue={30} disabled={disabled} />*/}
        {/*<Button onClick={this.disableChange}>Disable</Button>*/}
        <Row>
          <Col span={3}> </Col>
          <Col span={18}>
            <Navbar/>
          </Col>
          <Col span={3}> </Col>
        </Row>
        <Row>
          <Col span={8}> </Col>
          <Col span={8}>
            <Login/>
          </Col>
          <Col span={8}> </Col>
        </Row>
      </div>
    );
  }
}
export default App