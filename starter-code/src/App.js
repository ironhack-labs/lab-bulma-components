import React, {Component} from 'react';
import { Input, Select, Icon, Button, } from 'antd';


const ButtonGroup = Button.Group;
const option = Select.Option;
const selectBefore = (
    <Select defaultValue="senor" style={{ width: 90 }}>
      <Option value="senora">Señora</Option>
      <Option value="senor">Señor</Option>
    </Select>
  );

  const selectAfter = (
    <Select defaultValue="gmail" style={{ width: 180 }}>
      <Option value="hotmal">@hotmail.com</Option>
      <Option value="yahoo">@yahoo.com</Option>
      <Option value="zoho">@zoho.com</Option>
      <Option value="gmail">@gmail.com</Option>
    </Select>
  );


class App extends Component {

    notification(){
        
            notification.open({
              message: 'Notification Title',
              description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
              onClick: () => {
                console.log('Notification Clicked!');
              },
            });
          
    }

    render(){
        return <div className="wholeContainer">
        <div className="navbar">
            <div className="navbar-width">
                <div className="left-side-nav">
                    <img src="/images/oni-icon.png" alt="" className="logo-image"/>
                    <Button type="danger" className="home-button">Home</Button>
                </div>
                

                <div className="right-side-nav">
                    {/* <a class="nav-button" href="/signup">Signup</a>
                    <a class="nav-button" href="/login">Login</a> */}
                    <ButtonGroup>
                        <Button type="primary">
                            Signup
                        </Button>
                        <Button type="primary">
                            Login
                        </Button>
                    </ButtonGroup>
                </div>
            </div>
        </div>
        
        <div className="form">
                   <div className="form-field">
                        <h3>Tu nombre:</h3>
                        <Input addonBefore={selectBefore} placeholder="Tu nombre carnal"></Input>
                   </div> 
                   <div className="form-field">
                        <h3>Tu mail:</h3>
                        <Input addonAfter={selectAfter} placeholder="Tu mail carnal"></Input>
                   </div> 
                   <div className="form-field">
                        <h3>Tu password:</h3>
                        <Input type="password" ></Input>
                   </div> 
                   <div className="form-field-button">
                    <Button type="primary" className="button-send"> Envia tu información </Button>
                   </div>
                   
        </div>
    
        </div>
    }
}

export default App