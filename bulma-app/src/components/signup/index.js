import React, { Component } from 'react';

import FormField from './components/formField';
import CoolButton from './components/button';

export default class index extends Component {
	render() {
		return (
			<div>
				<FormField />
				<CoolButton isSmall isSuccess>
					Submit
				</CoolButton>
			</div>
		);
	}
}
