
import './App.css';
import Navbar from './navbar/Navbar'
import FormField from './formfield/FormField'
import CoolButton from './coolbutton/CoolButton'
import Message from './message/Message'

function App() {
  return (
    <main>
  <Navbar/>
  <form>
  <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
  <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
  <FormField label="Password" type="password" placeholder="*******" />
  <CoolButton isSmall isDanger className="is-rounded my-class" b3='Submit' ></CoolButton>
  </form>
  <hr></hr>
  <div className='buttons'>
  <CoolButton  isSmall isDanger className="is-rounded my-class" b1='Button1' ></CoolButton>
  <CoolButton  isSmall isSuccess b2='Button2'></CoolButton>
  </div>
  <hr></hr>
  <Message isInfo title='Hello World'></Message>
    </main>
  );
}

export default App;
