import React from 'react';
import Navbar from './navbar/Navbar';
import Message from './message/Message';
import CoolButton from './coolButton/CoolButton';
import Signup from './signup/Signup';
import Container from './container/Container';

const App = () => {
	return (
		<div>
			<header>
				<Navbar />
			</header>
			<main>
				<CoolButton isSmall isDanger className="is-rounded my-class">
					Button 1
				</CoolButton>
				<CoolButton isSmall isSuccess>
					Button 2
				</CoolButton>

				<Container>
					<Message isInfo title="Hello World">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
						<strong>Pellentesque risus mi</strong>.
					</Message>
				</Container>
			</main>
		</div>
	);
};

export default App;
