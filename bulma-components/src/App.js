import 'bulma/css/bulma.css';
import './App.css';
import Navbar from './navbar/Navbar';
import FormField from './formField/FormField';
import CoolButton from './coolButton/CoolButton';
import Signup from './signup/Signup';
import Message from './message/Message';

function App() {
  return (
    < >
      <Navbar input1='Home' input2='Login' input3='Signup'></Navbar>
      <FormField input1='Name' type='text' placeholder='e.g Alex Smith' ></FormField>
      <FormField input1='Email' type='email' placeholder='e.g. alexsmith@gmail.com' ></FormField>
      <CoolButton className="button is-rounded my-class is-danger is-small is-centered" btn1="Button 1" > </CoolButton>
      <CoolButton className="button is-small is-success is-centered" btn1="Button 2"> </CoolButton>
      <Signup></Signup>
      <Message
        title="Hello world"
        description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus mi."
      > </Message>

    </>

  );
}

export default App;
