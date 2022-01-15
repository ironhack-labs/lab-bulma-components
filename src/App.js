import Signup from "./signup/Signup.js";
import Message from "./message/Message.js";
// import './App.css';

function App() {
  return (
    <div className="App">
      <Signup />
      <Message title="Hello World">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
        <strong>Pellentesque risus mi</strong>.
      </Message>
    </div>
  );
}

export default App;
