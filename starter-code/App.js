import React, { Component } from 'react'
import './App.css'

import NavBar from './components/NavBar'
import FormField from './components/FormField'
import CoolButton from './components/CoolButton'
import SignUp from './components/SignUp'

class App extends Component {
	render() {
		return (
			<main>
				<NavBar />
				<FormField />
				<CoolButton />
				<SignUp />
			</main>
		)
	}
}

export default App
