import React from 'react';
import IdCard from './components/IdCards/IdCards'
import Greetings from './components/Greetings/Greetings'
import Random from './components/Random/Random'
import BoxColor from './components/BoxColor/BoxColor'
import CreditCard from './components/CreditCard/CreditCard'
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

      <h2>Iteraction 3</h2>
      <Random min={3} max={8}/>
      <Random min={1} max={85}/>

      <h2>Iteraction 4 </h2>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />

    <h2> Iteraction 5</h2>

      <CreditCard
      type="Visa"
      number="0123456789018845"
      expirationMonth={3}
      expirationYear={2021}
      bank="BNP"
      owner="Maxence Bouret"
      bgColor="#11aa99"
      color="white" />

      <CreditCard
      type="Master Card"
      number="0123456789010995"
      expirationMonth={3}
      expirationYear={2021}
      bank="N26"
      owner="Maxence Bouret"
      bgColor="#eeeeee"
      color="#222222" />


    </div> 



  );
};

export default App;
