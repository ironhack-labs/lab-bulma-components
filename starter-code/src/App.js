import React, { Component, Fragment } from 'react';
import Navbar from './components/Navbar';
import FormField from './components/FormField';
import CoolButton from './components/CoolButton';
import Signup from './components/Signup';
import Message from './components/Message';

class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="App">
          <Navbar />
          <div className="container">
            <div className="columns">
              <div className="column is-half">
                <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
              </div>
              <div className="column is-half">
                <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
              </div>
            </div>
            <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
            <CoolButton isSmall isSuccess>Button 2</CoolButton>
          </div>
        </div>
        <Message isInfo title="Hello World">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
        </Message>
        <div className="App">
          <Signup />
        </div>
      </Fragment>
    );
  }
};

export default App;