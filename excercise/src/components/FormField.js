import React from 'react'
import { directive } from '@babel/types'

const FormField = props => {
	return (
		<div>
			<label>{props.label}</label>
			<input type={props.type} placeholder={props.placeholder} class='input is-primary' />
		</div>
	)
}

export default FormField
