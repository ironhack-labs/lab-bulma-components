import React from 'react'
import Nav from './Nav'
import FormField from './FormField'
import CoolButton1 from './CoolButton1'



function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <div main>
        <div className="container">
          <div className="row">
            <div className="col-8">
              <FormField labelName="Name" typeName="text" placeholderName="e.g Nico Amarillo"
                labelEmail="Email" typeEmail="text" placeholderEmail="e.g amraillo@gmail.com"
                labelPassword="Password" typePassword="text" placeholderPassword="******" />
              <CoolButton1 text="Submit"></CoolButton1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
