import React from 'react';
import { FormField } from './components/formfield/FormField';
import { Navbar } from './components/navbar/Navbar';
import { CoolButton } from './components/coolButton/CoolButton';
import { Signup } from './components/signup/Signup';
import { Message } from './components/message/Message';
import './App.css';


export const App = () => {
	return (
		<div>
			<Navbar/>
			<div className={'register'}>
				<FormField label={'Name'} type={'text'} placeholder={'e.g Alex Smith'}/>
				<FormField label={'Email'} type={'email'} placeholder={'e.g alexsmith@gmail.com'}/>
				<CoolButton isSmall isDanger className="is-rounded my-class" text={'Button 1'}/>
				<CoolButton isSmall isSuccess text={'Button 2'}/>
				<Message title={'Hello World'}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
				</Message>
			</div>
		</div>

	)
};



