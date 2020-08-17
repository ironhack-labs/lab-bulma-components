import React from 'react';
import Message from '../message/Message'
import './Container.css'

const Container = () => {
    return (
        <div id="container" className="container is-fluid">
            <Message isInfo title='Hello World'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
            </Message>
        </div>
    )
}

export default Container;
