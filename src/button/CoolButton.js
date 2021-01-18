import React from 'react';
import 'bulma/css/bulma.css';
import './CoolButton.css';


const CoolButton = (props) => {

	let classes = [];
	if (props.isPrimary) {
		classes.push('is-primary');
	}
	if (props.isSuccess) {
		classes.push('is-success');
	}
	if (props.isDanger) {
		classes.push('is-danger');
	}

	classes = classes.join(' ').concat(' button is-rounded my-class is-small');

	return (
		<React.Fragment>
			<p className="control">
				<a className={classes}
				   href="/">
					<span>{props.button}</span>
				</a>
			</p>
		</React.Fragment>
	);
};

export {CoolButton};