import React from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import CoolButton from "./components/CoolButton";

function App() {
  return (
    <div>
      <Navbar />
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-4 is-offset-4">
              <div className="box">
                <Form />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
