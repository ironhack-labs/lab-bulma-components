import 'bulma/css/bulma.css';
import './App.css';
import Navbar from './navbar/Navbar';
import FormField from './formfield/FormField';
import CoolButton from './coolbutton/CoolButton';
import Signup from './signup/Signup';


function App() {
  return (
  <div>
      <section> <Navbar /> </section> 
      {/* <section>
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" /> 
      </section> */}
      <section> 
      {/* < CoolButton typeButton="button is-danger is-rounded" text="Button 1" />
      < CoolButton typeButton="button is-success is-hovered" text="Button 1" /> */}
      </section>
      <section> 
      <Signup />
      </section>
  </div>
  );
}

export default App;
