import React from 'react';
import FormField from './formField'
import NavBar from './nav'
import Message from './message'


const Signup = props => {
    return (

        <React.Fragment>
            <header>
                <NavBar />
            </header>
            <section>
                <FormField />
                <Message />
            </section>
        </React.Fragment>

    )
}

export default Signup