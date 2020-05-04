import React from 'react'
import './SignUp.css'

import Navbar from '../navbar/Navbar'
import FormField from '../formfield/FormField'
import CoolButton from '../coolbutton/CoolButton'
import Message from '../message/Message'

const Signup = () => {
	return (
		<>
			<Navbar />
			<article id='signup-container'>
				<Message classBulma='message is-info' title='Hello World' content=' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus mi.' />
				<FormField label='Name' type='text' placeholder='e.g Alex Smith' />
				<FormField label='Email' type='email' placeholder='e.g. alexsmith@gmail.com' />
				<FormField label='Password' type='password' placeholder='type your password' />
				<CoolButton styleBulma='button is-rounded my-class is-danger is-small' myButtonName='Submit' />
			</article>
		</>
	)
}

export default Signup
