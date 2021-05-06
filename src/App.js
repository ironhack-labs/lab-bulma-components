import React from 'react';
import SignUp from './signup/SignUp';
import Message from './message/Message'


const App = () => {
  return(
  <div class='container'>
<SignUp/>
<Message isInfo title='Hello World'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
      </Message>
</div>
) 

};

export default App;
