import React from 'react';
import 'bulma/css/bulma.css';
import './Container.css';
import Message from '../Message/Message';

export const Container = () => {
    return (
        <div className='container'>
            <Message title='Hello World' content='Lorem ipsum dolor sit amet consectetur, adipisicing elit. ' strong='Exercitationem, similique?' />

        </div>
    )
}
export default Container;