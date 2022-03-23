import React from 'react';
import ReactDom from 'react-dom';

import "bulma/css/bulma.css";

import checkClassesBulma from '../Bulma';

const Message = (props) => {
    const { children , title, ...classNames} = props;
    const className = `message ${checkClassesBulma(classNames)}`;
    return (
        <article className={ className }>
            <div className="message-header">
                <p>{title}</p>
                <button className="delete" aria-label="delete"></button>
            </div>
            <div className="message-body">
                { children }
            </div>
            </article>
    );
};

export default Message;