import React,  {Component} from 'react';
import { Button, notification,Slider,Row, Col } from 'antd';
import Login from "../Component/Login";
import Navbar from "../Component/Navbar";
import './style.css';
import ButtonCool from "../Component/ButtonCool";

class App extends Component{
  state = {
    disabled: false,
    stateButton:false,
    styles:'primary'
  };

  changeState = () => {
    let {stateButton}= this.state;
    stateButton=!stateButton;
    this.setState({stateButton})
  }

  changeForm = () => {
    let {styles} = this.state;

    if(styles=='primary'){
      console.log('entro a primary')
      styles='danger';

    }
    else{
      console.log('entro a danger')
      styles='primary';
    }
    this.setState({styles})
  }

  render() {
    let {styles} = this.state;
    console.log('styles en app',styles)
    return(
      <div>
        <Row>
          <Col span={3} > <div className="conLeft"> </div>  </Col>
          <Col span={18}>
            <Navbar/>
          </Col>
          <Col span={3} > <div className="conLeft"> </div>  </Col>
        </Row>
        <Row>
          <Col span={8}> </Col>
          <Col span={8}>
            <Login/>
          </Col>
          <Col span={8}> </Col>
        </Row>
        <Row>
          <Col span={7}>
          </Col>
          <Col span={8}>
            <Button type="primary" onClick={this.changeState}  >Create button</Button> <br/><br/>
            <Button type="primary" onClick={this.changeForm}  >Change type button</Button>


          </Col>
          <Col span={4}>
            {  this.state.stateButton?
              <ButtonCool
              style ={styles}
              />:''}
          </Col>
          <Col span={7}>
          </Col>
        </Row>
      </div>
    );
  }
}
export default App