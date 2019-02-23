import React, {Component} from 'react'
import {
  Form, Icon, Input, Col, Row,
} from 'antd';



import CoolButton from './CoolButton'

class NormalLoginForm extends Component {

  state = {
    formLayout: 'horizontal'
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    const {formLayout} = this.state
    const { getFieldDecorator } = this.props.form;
    
    const formItemLayout = formLayout === 'horizontal' ? {
      labelCol: { span: 4 },
      wrapperCol: { span: 10 },
    } : null;

    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };
    
    return (
      
      <div>
      <Form layout={formLayout} onSubmit={this.handleSubmit} className="login-form">
        <Form.Item label="Name" {...formItemLayout}>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </Form.Item>
        <Form.Item label="E-mail" {...formItemLayout}>
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Please input your email!' }],
          })(
            <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="email" />
          )}
        </Form.Item>
        <Form.Item label="Password" {...formItemLayout}>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </Form.Item>
          <br/>
          <br/>
          <br/>
        <Form.Item {...tailFormItemLayout}>
          <CoolButton />
        </Form.Item>
      </Form>
      </div>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);

export default WrappedNormalLoginForm;