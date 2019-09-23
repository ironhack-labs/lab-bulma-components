import React from "react";
import Navbar from "./Navbar";
import FormField from "./FormField";
import CoolButton from "./CoolButton";
import Signup from "./Signup";
import Message from "./Message";

const Container = () => {
  return (
    <div>
      <div>
        <Navbar />
        <form>
          <FormField label='Name' type='text' placeholder='e.g Alex Smith' />
          <FormField
            label='Email'
            type='email'
            placeholder='e.g. alexsmith@gmail.com'
          />
        </form>
        <CoolButton isSmall isDanger className='is-rounded my-class'>
          Button 1
        </CoolButton>
        <CoolButton isSmall isSuccess>
          Button 2
        </CoolButton>

        <Signup />

        <Message isInfo title='Hello World'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <strong> Pellentesque risus mi</strong>.
        </Message>
      </div>
    </div>
  );
};

export default Container;
