import React from 'react';
import Navbar from "./navbar/Navbar"
import FormField from './formfield/FormField';
import Button from "./button/Button"

//

const App = () => {
  return (
    <div>
      <h1>Bulma</h1>
      <Navbar />
      <FormField label="Name" type="text" placeholder="e.g Maija Meikäläinen" />
      <FormField label="Email" type="email" placeholder="e.g. spam-mail@gmail.com" />
      {/* (would be cool to do this from an array but couldn't understand the instructions) */}
      <Button  prop1="isDanger" prop2="isSmall" >Button 1 </Button>
      {/*like this: <img src={`/images/${this.props.imag}`} alt=""/> */}
      <Button  prop1="isSmall" prop2="isSuccess">Button 2 </Button>
      {/* <CoolButton isSmall  className="is-rounded my-class">Button 1</CoolButton>
          <CoolButton isSmall isSuccess>Button 2</CoolButton> */}

    </div>
      )
};

export default App;
