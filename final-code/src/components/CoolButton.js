import React from 'react';
import 'bulma/css/bulma.css';

function button(props) {
	return (
		<span class="control">
			<a class={props.className}>
				{props.value}
			</a>
		</span>
	)
}

export default button;