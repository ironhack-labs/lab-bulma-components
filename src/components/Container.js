import React from 'react';
import Message from './Message';
import 'bulma/css/bulma.css';

const Container = props => {
    return (
        <div className="container">
            <Message className="message is-info" title='Hello World' text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
    </div>
    )
}
export default Container
