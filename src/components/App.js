import './App.css';
import Navbar from './navbar/Navbar';
import FormField from './formField/FormField'
import Signup from './signup/Signup'
import Message from './message/Message'


function App() {
  return (
    <>
    {/* <Navbar />
    
    <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
    <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" /> */}

    <Signup />

    <Message isWarning title='Hello World'>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
    </Message>
     
    </>
  );
}

export default App;
