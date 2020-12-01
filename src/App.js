import React from "react";

import Navbar from "./Navbar/Navbar";
import FormField from "./Formfield/Formfield";
import CoolButton from "./CoolButton/CoolButton";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <FormField label="Email" type="email" placeholder="email@email.com" />
      <CoolButton isSmall isSuccess>
        Accept
      </CoolButton>
    </div>
  );
};

export default App;
