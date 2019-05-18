import React, {Component, Fragment} from 'react'
import Navbar from './components/Navbar'
import Form from './components/Form'
class App extends Component {
  render(){
    return (
      <Fragment>
        <Navbar />
        <Form />
      </Fragment>
    )
  }
}

export default App