import React from 'react'

import Signup from '../signup/Signup'

import Message from '../message/Message'


const Container = () => {
    
    (
    
        <>
            
            <div className="container">
            
                <Signup />
                
                <Message Message className = "isInfo" title = "Hello World" > "Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>."</Message>

            </div>
        
        </>

)}




export default Container