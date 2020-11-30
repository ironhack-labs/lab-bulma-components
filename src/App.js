import React, {Fragment} from 'react';
import 'bulma/css/bulma.css';
import Navbar from './navbar/Navbar';
import FormField from './formfield/FormField';
import CoolButton from './coolButton/CoolButton';
import Signup from './Signup';

const App = () => {
  
  return (

    <Signup/>
    // <Fragment>
    // 	<div>
    // 	  <Navbar  />
    // 	</div>

    //   <div>
    //     <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
    //     <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
    //   </div>

    //   <div>
    //   <CoolButton isSmall isDanger className="is-rounded my-class" />
    //     <CoolButton isSmall isSuccess />
    //   </div>
        
      

    // </Fragment>
  )
  
};

export default App;
