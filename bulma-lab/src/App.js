import React from 'react';
// import './App.css';
import Navbar from './components/navbar';
import FormField from './components/form';
import CoolButton from './components/coolbutton';


class App extends React.Component {

  render() {

    return (

      <div className="App" >

        <Navbar />

        {/* Same component is reusable but we can provide it different values */}
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g Alex@yahoo.com" />
        {/* <CoolButton /> */}

      </div>

    );

  }


}

export default App;
