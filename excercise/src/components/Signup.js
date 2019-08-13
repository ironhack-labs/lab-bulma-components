import React from 'react'
import Nav from './Nav'
import FormField from './FormField'
import CoolButton from './CoolButton'

const Signup = () => {
	return (
		<div>
			<Nav />
			<FormField label='Name' type='text' placeholder='Your name' />
			<FormField label='Email' type='email' placeholder='Your email' />
			<FormField label='Password' type='password' />
			<CoolButton className='button is-small is-success'>Submit</CoolButton>
		</div>
	)
}

export default Signup
