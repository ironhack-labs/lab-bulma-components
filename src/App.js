import React from 'react';
import 'bulma/css/bulma.css';
// import {NavBar} from './navbar/Navbar'
// import {FormField} from './formfield/FormField'
// import {CoolButton} from './coolbutton/CoolButton'
import {Signup} from './signup/Signup'
import {Message} from './message/Message'

const App = () => {
  return <div className='container'>
        <Signup />
        <Message isInfo title='Hello World'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
        </Message>
    </div>
};

export default App;
