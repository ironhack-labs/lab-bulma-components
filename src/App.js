import React from 'react';
import './App.css'


import NavBar from './components/navbar/Navbar'
import FormField from './components/formfield/FormField'
import CoolButton from './components/coolbutton/CoolButton'
import Message from './components/message/Message'


const App = () => {
  return (
    <main>
      <section>
        <NavBar />
      </section>

      <div className="signUp">
        <form>
          <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
          <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
          <FormField label="Password" type="password" placeholder="*******" />
          <CoolButton className="button is-rounded my-class is-small is-dark sign-btn" text="Sign Up" style={'padding: 30px'} />
        </form>
      </div>
      <div className="message">
        <Message title="Hello World" />
      </div>
    </main>

  );
};

export default App;
