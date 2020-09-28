import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar'
import Signup from './components/Signup'
import Message from './components/message/Message'

function App() {

    return (
        <React.Fragment>
            <Navbar />
            <main>
                <Signup />
                <Message title='Hello World'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
                </Message>
            </main>
        </ React.Fragment>
    );

}

export default App