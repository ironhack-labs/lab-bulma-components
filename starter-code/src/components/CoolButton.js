import React from 'react';

const CoolButton = ({className,text,isSmall,isDanger,isSuccess}) => (

    <a className={className}> {text} </a>
);


export default CoolButton;