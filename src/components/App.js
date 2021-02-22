import "./App.css";

import Navbar from "./Navbar";
import FormField from "./FormField";
import CoolButton from "./CoolButton";
import Signup from "./Signup";

function App() {
  return (
    <>
      <nav>
        <Navbar></Navbar>
      </nav>

      <form className="form">
        <FormField
          label="Name"
          type="text"
          placeholder="e.g Alex Smith" />
        <FormField
          label="Email"
          type="email"
          placeholder="e.g. alexsmith@gmail.com" />
        <CoolButton
          type='submit'
          class="button is-rounded my-class is-danger is-small"
          name="Button1" />
        <CoolButton
          type='submit'
          class="button is-small is-success"
          name="Button2" />
      </form>


      <hr></hr>

      <Signup></Signup>
    </>
  );
}

export default App;
