import React from 'react';
import 'bulma/css/bulma.css';
import Navbar from './navbar/Navbar'
import FormField from './formfield/Formfield'
import CoolButton from './coolbutton/CoolButton'

const App = () => {
  return (

  <div>
    <Navbar />
   

    <div className='field'>

     
      
     <div>
     <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
     <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
     </div>
     
    </div>

    <div>
    <CoolButton isSmall isDanger className="is-rounded my-class">
    Button 1
    </CoolButton>
    <CoolButton isSmall isSuccess>
    Button 2
    </CoolButton>
    
   
    

    </div>
  </div>
  
  );
};



export default App;
