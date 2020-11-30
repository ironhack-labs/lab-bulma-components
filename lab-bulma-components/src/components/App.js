import './App.css';
import Navbar from '../navbar/Navbar'
import FormField from '../formfield/FormField'
import Signup from '../signup/Signup'

function App() {
  return (
    <div className ="App">
    <Navbar />
    <section className="form-container">
    <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
    <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
    </section>
    <Signup />

    </div>
  );
}

export default App;
