import React from 'react';
import ReactDom from 'react-dom';

import "bulma/css/bulma.css";

import checkClassesBulma from '../Bulma';

const CoolButton = (props) => {
    const { children, ...classNames } = props;
    const className = `button ${checkClassesBulma(classNames)}`;
    return ( <button className={className}>{children}</button> );
};

export default CoolButton;