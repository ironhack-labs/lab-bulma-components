import React from "react";
import SignUp from "./signup/Signup";
import Message from "./message/Message";
import 'bulma/css/bulma.css';

import "./App.css";

function App() {
  return (
    <div>
      <SignUp />
      <Message title='Hello World!' message ='message' messagestrong ='strong' />
    </div>
  );
}

export default App;