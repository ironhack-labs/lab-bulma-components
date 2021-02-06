import React from 'react';
import IdCard from './components/IdCards/IdCards'
import Greetings from './components/Greetings/Greetings'
import './App.css'

const App = () => {
  return(
    <div className="App">
      <h2>Iteration 1</h2>

      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={('1992-07-14')}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        lastName="Delores "
        firstName="Obrien"
        gender="female"
        height={172}
        birth={('1988-05-11')}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />

      <h2>Interation 2</h2>

      <Greetings lang="de">Ludwig</Greetings>
      
      <Greetings lang="fr">François</Greetings>

    </div> 
  );
};

export default App;
