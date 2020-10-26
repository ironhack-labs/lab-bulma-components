import React from 'react';

import 'bulma/css/bulma.css';

/// Importing every component!!!!!
import Navbar from './navbar/Navbar'
import FormField from './formfield/FormField' 
import CoolButton from './coolbutton/CoolButton'
import Message from './message/Message'

const App = () => {
  return (
    <div>
            <Navbar />
            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
            <CoolButton isSmall isDanger isRounded className="is-rounded is-cool">Button 1</CoolButton>
            <CoolButton isSmall isSuccess>Button 2</CoolButton>

            {/* <Message isInfo title='Hello World'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
            </Message> */}

    </div>
  )
};

export default App;
