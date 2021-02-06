import React from 'react';

function IdCard ({lastName, firstName, gender, height, birth, picture}){
    return(
        <div>
          <h3>{lastName} {firstName}</h3>
          <p>{gender}</p>  
          <p>{height}</p>
          <p>{birth}</p>
          <img src= {picture} alt='pic'/>
        </div>
    );
}

export default IdCard