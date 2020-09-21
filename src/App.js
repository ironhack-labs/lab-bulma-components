import React, {Fragment} from 'react';
import Navbar from './components/navbar';
import Signup from './components/signup';
import 'bulma/css/bulma.css';

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="container">
        <Signup />
      </div>
    </Fragment>
  );
};

export default App;
