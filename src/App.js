// - juntar todos os componentes e estruturar ANTES de exportar para o "renderizador"

import React from "react";
import Navbar from "./navbar/Navbar.js";
import FormField from "./formfield/FormField.js";
import CoolButton from "./coolbutton/CoolButton.js";


const App = () => {
  return (
    <React.Fragment>
      <Navbar/>
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      <CoolButton/>
    </React.Fragment>
  );
};

export default App;
