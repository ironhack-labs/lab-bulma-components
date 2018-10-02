


import React, {Component}from 'react'
import './App.css'

//importar las componentes
import Nav from './components/Nav'
import Form from './components/Form'
import Button from './components/Button'
import Message from './components/Message'


class App extends Component {
    render (){
        return(


            <div>


              <Nav /> 
              <Form/> 
              <Button/>
              <Message />
            
            
            </div>
        )
    }
}

export default App;