import React, {Component} from 'react';
import 'bulma/css/bulma.css';
import Navbar from './navbar/Navbar'
import FormField from './formfield/FormField';
import CoolButton from './CoolButton/CoolButton'
import { Switch, Route } from "react-router-dom";
import Container from './container/Container'

class App extends Component {
  render() {
    return (
      <Switch>
          <Route
              exact path="/"
              component={() => 
                              <div>
                                <Navbar />
                                <div className="columns">
                                  <div className="column is-half is-offset-one-quarter">
                                    <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
                                    <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
                                    <div className="columns is-centered">
                                      <div className="column">
                                        <CoolButton classes={['isSmall','isDanger','is-rounded','my-class']} number="Button 1"></CoolButton>
                                      </div>
                                      <div className="column">
                                        <CoolButton classes={['isSmall','isSuccess']} number="Button 2"></CoolButton>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="columns">
                                  <div className="column is-half is-offset-one-quarter"><Container title="Hellow world" /></div>
                                  
                                </div>
                              </div>
                        } />
          <Route
              path="/signup"
              render={() => 
                          <div>
                            <Navbar />
                              <div className="columns">
                                <div className="column is-half is-offset-one-quarter">
                                  <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
                                  <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
                                  <FormField label="Password" type="password" placeholder="****************" />
                                <div className="columns level-right">
                                    <div className="column is-half is-offset-one-quarter">
                                      <CoolButton classes={['isSmall','isSuccess','is-rounded','my-class']} number="Submit"></CoolButton>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              </div>
                      } />
      </Switch>
    );
  }
}
export default App;