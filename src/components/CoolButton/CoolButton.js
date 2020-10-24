import React from 'react';
import returnClassNames from '../../utils/classManager';

const CoolButton = (props) => {
    return (<button className={`button ${returnClassNames(props)}`}>{props.children}</button>);
}

export default CoolButton;