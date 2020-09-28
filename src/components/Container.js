import React, { Component } from 'react';
import '../components/FormField.css';
import 'bulma/css/bulma.css';
import Message from './Message'


class Container extends Component {

    render() {
        return (
            <Message isInfo title='Hello World'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
            </Message>
        )
    }
}


export default Container