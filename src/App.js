import React from 'react';
import Navbar from './navbar/navbar';
import Formsfield from './navbar/formfield';
import Colbutton from './navbar/coolbutton';
import Signup from "./signup";
import Message from './navbar/message';
import 'bulma/css/bulma.css';

const App = () => {
  return <h1>Bulma</h1>;
};
let message = {
  header : "Header 2";
  body: "Text text text text";
}

return (
  <div className="App">
    <Navbar/>

    <div className="signup-page">
      <SignupPage/>
      </div>
      </div>
      );
    };

export default App;
