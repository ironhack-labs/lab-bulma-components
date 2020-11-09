import React from "react";

// Css styles
import "bulma/css/bulma.css";
import "./App.css";

// Components
import NavBar from "./components/Navbar/NavBar";
import Hero from "./components/FormField/Hero";
import SignUp from "./components/SignUp/SignUp";
import Message from "./components/Message";

const App = () => {
  return (
    <div className="general-container">
      <NavBar />
      <Hero />
      <section className="bottom_section">
        <section className="signup_section">
          <SignUp />
        </section>
        <section>
          <Message />
        </section>
      </section>
    </div>
  );
};

export default App;
