import './App.css';
import Navbar from './navbar/Navbar';
import FormField from './formfield/FormField'

function App() {
  return (
    <>
    <Navbar />
    
    <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
    <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
    </>
  );
}

export default App;
