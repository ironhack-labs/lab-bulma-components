import React from 'react';
import 'bulma/css/bulma.css';
import Navbar from './Navbar/Navbar';
import FormField from './formfild/FormField';
import CoolButton from './coolbutton/CoolButton';



const App = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <FormField label="Name" type="text" placeholder="ex Gustavo Barbosa" />
        <FormField label="Email" type="email" placeholder="ex Gustavo.sena0@gmail.com" />
      </div>
      <div className = "bts">
        < CoolButton isSmall isDanger className="is-rounded my-class" > Botão 1 </CoolButton >
        <CoolButton isSmall isSuccess > Botão  2 </ CoolButton>
      </div>
    </div>
  );
};

export default App;
