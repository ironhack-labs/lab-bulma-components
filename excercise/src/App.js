import React from 'react'
import logo from './logo.svg'
import './App.css'

import Nav from './components/Nav'
import FormField from './components/FormField'
import CoolButton from './components/CoolButton'
import Signup from './components/Signup'
import Message from './components/Message'
import Container from './components/Container'

function App() {
	return (
		<div className='App'>
			<Container>
				<Nav />
				<FormField label='Name' type='text' placeholder='e.g Alex Smith' />
				<FormField label='Email' type='email' placeholder='e.g. alexsmith@gmail.com' />
				<CoolButton className='button is-small is-danger is-rounded my-class'>Button 1</CoolButton>
				<CoolButton className='button is-small is-success'>Button 2</CoolButton>
				<Signup />
				<Message title='Hello World'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
				</Message>
			</Container>
		</div>
	)
}

export default App
