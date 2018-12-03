import React from "react";

import Navbar from './components/NavBar';
import FormField from './components/FormField';
// import 'bulma/css/bulma.css';
import '../public/styles/styles.css';

class App extends React.Component {
  render() {
      return ( < div className = "App" >
              <Navbar/>
              <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
              <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
                 
          </div>
      );
  }
}

export default App;