import React from 'react';
import Message from "./Message"
import "./Container.css"


const Container = () => {
  return (
      <div className= "container-style">
          <Message className= "isInfo" title= "HelloWorld" message= "Blibliblbi bliblala blibla blieablibla"/>
      </div>
  )
};

export default Container;