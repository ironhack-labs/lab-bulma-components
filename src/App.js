import "./App.css";
import CoolButton from "./components/CoolButton";
import FormField from "./components/FormField";
import Navbar from "./components/Navbar";
import SignupForm from "./components/SignupForm";




function App() {
  return <div className="App">
    <Navbar />
    <SignupForm />
    <CoolButton isInfo>
button 1
    </CoolButton>

    <CoolButton isSuccess>
button 2
    </CoolButton>

  </div>;
}
export default App;
