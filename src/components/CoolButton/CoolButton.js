import React from 'react';
import './CoolButton.css';

import mountClassStringFromProps from '../../utils/mountClassStringFromProps';

const CoolButton = (props) => {
    return(
        <button className={`button ${mountClassStringFromProps(props)}`}>{props.children}</button>
    );
};

export default CoolButton;