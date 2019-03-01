import React from 'react';
import SignUp from './SignUp';
import Navbar from './Navbar';
import Container from './Container';

class App extends React.Component {
    render () {

        return (
            <div className="App">
                <Navbar />
                <Container>
                    <SignUp />
                </Container>

            </div>
        );
    }
}


export default App;