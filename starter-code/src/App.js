import React, {Component}from 'react'
import Nav from './components/Navbar'
import Form from './components/Form'
import Button from './components/Button'


class App extends Component {
    render (){
        return(
            <div>
              <Nav /> <br/>
              <Form/> <br/>
              <Button/><br/>
              <Message />
            </div>
        )
    }
}

export default App;