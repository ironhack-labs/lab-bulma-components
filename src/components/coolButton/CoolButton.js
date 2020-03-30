import React from 'react';

export const CoolButton = (props) => {
	console.log(props);
	let myClass = 'button ';
	myClass += props.className ? props.className + ' ' : '';
	myClass += props.isSmall ? 'is-small ' : '';
	myClass += props.isDanger ? 'is-danger ' : '';
	myClass += props.isSuccess ? 'is-success ' : '';
	myClass += props.isPrimary ? 'is-primary ' : '';
	myClass += props.isInfo ? 'is-info ' : '';

	return (
		<>
			<button className={myClass}>{props.text}</button>
		</>
	)
};