import React from 'react'
import './Container.css'

const Container = props => {
    return (
        <div className='container'>
        <div className='notification'>
          This container is: <strong>{props.title}</strong>.
         {props.firstElement}
         {props.secondElement}
        </div>
      </div>
    );
  };


export default Container