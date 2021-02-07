import React from 'react'

      function CreditCard ({type,number,expirationMonth,expirationYear,bank,bgColor,owner,color}){
          const divStyle = {backgroundColor: {bgColor}}
          const maskedNumber = number.replace(/.(?=.{4})/g, 'x');
   
    return(
        <div style ={divStyle}>
            <p>{type}</p>
            <p>{maskedNumber}</p>
            <p>{expirationMonth}</p>
            <p>{expirationYear}</p>
            <h5>{owner}</h5>
            <p>{bank}</p>
            <p>{color}</p>
        </div>
    );
}

export default CreditCard