import React, { Component } from 'react';
import { Layout } from 'antd';
import Navbar from './Navbar';
import FormField from './FormField';
import './customstyles.css';

const { Header, Content, Footer } = Layout;

class App extends Component {

  render() {
    return (<div className="App">
      <Layout >
        <Header
          className="Header">
          <Navbar />
        </Header>
        <Content
          className="Content">
          <h1>Ant Design Demo</h1>
          <FormField />
        </Content>
        <Footer
          className="Footer">
          <p>Created with ⚛️ for Ironhack</p>
          <small>check out ma gifs...</small>
          <img className="navbar-gif" src="./images/coolreddude.gif" alt=""/>
          <img className="navbar-gif" src="./images/coolmail.gif" alt=""/>
          <img className="navbar-gif" src="./images/hitchhiker.gif" alt=""/>
        </Footer>
      </Layout>
    </div>)
  }
}

export default App;