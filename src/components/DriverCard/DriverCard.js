import React from 'react';

function DriverCard ({name, rating, img, car:{model,licensePlate} }){
    return(
        <div>
          <h3>{name}</h3>
          <p>{rating}</p>  
          <p>{licensePlate}</p>
          <p>{model}</p>
          <img src= {img} alt='pic' width="350" height="350"/>
        </div>
    );
}
export default DriverCard