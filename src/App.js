import React from 'react';
import Navbar from './navbar/Navbar';
import FormField from './formfield/FormField';

const App = () => {
	return (
		<div>
			<header>
				<Navbar />
			</header>
			<main>
				<FormField label="Name" type="text" placeholder="e.g Alex Smith" />
				<FormField
					label="Email"
					type="email"
					placeholder="e.g. alexsmith@gmail.com"
				/>
			</main>
		</div>
	);
};

export default App;
