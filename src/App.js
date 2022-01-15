import NavBar from "./navbar/Navbar.js";
import FormField from "./formfield/Formfield.js";
import CoolButton from "./coolButton/CoolButton.js";
// import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />

      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />

      <CoolButton className="button is-rounded my-class is-danger is-small">Button 1</CoolButton>
      <CoolButton className="button is-small is-success">Button 2</CoolButton>

      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
