import React, { Component } from 'react'
import Nav from './components/Nav'
import Form from './components/Form'
import Buttons from './components/Buttons'


export default class App extends Component {
    render() {
        return (
            <div className='App'>
                <Nav />
                <Form />
                <Buttons />

            </div>
        )
    }
}
