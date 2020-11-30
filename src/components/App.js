import './App.css';
import Navbar from './navbar/Navbar'
import Form from './form/FormField'
import CoolButton from './coolbtn/CoolButton'
import SignUp from './signupPage/signup'
import Message from './message/message'

function App() {
  return (
    <div>
      <Navbar fstButtonTxt="Home"/>
      <main>
        <form>

          <Form size=" is-medium" label="Name" type="text" placeholder="e.g Alex Smith" />
          <Form size=" is-medium" label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />

          <div className="buttons">
          <CoolButton color="is-danger" isRounded="is-rounded" title="Button 1" />
          <CoolButton color="is-success" title="Button 2"/>
          </div>

        </form>

        <SignUp />
        <Message color=" is-info" title="Hello World" justify="is-offset-one-quarter"/>
      </main>
    </div>
  );
}

export default App;
