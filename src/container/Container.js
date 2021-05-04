import React from 'react';
import 'bulma/css/bulma.css';
import './Container.css';
import Signup from '../signup/Signup';

const Container = () => {
    return (
        <div className="container">
            <Signup />
            <Message isInfo title='Hello World'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
            </Message>
        </div>
    )
}
export default Container;