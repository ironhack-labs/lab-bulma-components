import React from 'react';
import 'bulma/css/bulma.css';
import Navbar from './navbar/Navbar';
import Formfield from './formfield/Formfield';
import Coolbutton from './button/Coolbutton';

const App = () => {
	return (
		<div className="App">
			<Navbar />
			<Login />
		</div>
	);
};

import Login from './login/Login';

export default App;
