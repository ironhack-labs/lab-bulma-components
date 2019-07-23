import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import FormField from './components/formField';
import CoolButton from './components/button';
import Message from './components/message';
import 'bulma/css/bulma.css';

function App() {
	return (
		<div className="App">
			<div className="container">
				<Navbar />
				<FormField label="Name" type="text" placeholder="e.g Alex Smith" />
				<FormField
					label="Email"
					type="email"
					placeholder="e.g. alexsmith@gmail.com"
				/>
				<CoolButton isSmall isDanger className="is-rounded my-class">
					Button 1
				</CoolButton>
				<CoolButton isSmall isSuccess>
					Button 2
				</CoolButton>
			</div>
			<Message isInfo title="Hello World">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
				<strong>Pellentesque risus mi</strong>.
			</Message>
		</div>
	);
}

export default App;
