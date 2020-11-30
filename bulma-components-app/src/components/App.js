import "./App.css";
import Navbar from "./Navbar";
import FormField from "./FormField";
import CoolButton from "./CoolButton";
import Signup from "./Signup";

function App() {
  return (
    <main>
      <Navbar />

      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email"type="email" placeholder="e.g. alexsmith@gmail.com" />

      <CoolButton isSmall isDanger className="login-button is-rounded my-class" name="Button 1"></CoolButton>
      <CoolButton isSmall isSuccess className="login-button" name="Button 2"></CoolButton>

      <hr></hr>

      <Signup />
    </main>
  );
}

export default App;
