import React from 'react';

import Signup from './Signup';
import Container from './Container';

class App extends React.Component {
    state = {

    }
    render() {
        return(
            <div className="app">
                <Container />      
                <Signup />
            </div>
        )
    }
}

export default App; 