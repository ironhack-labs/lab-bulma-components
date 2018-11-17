import React from 'react';

const CoolButton = ({ buttonType, buttonName }) => (
	<button className={ buttonType }>{ buttonName }</button>
);

export default CoolButton;