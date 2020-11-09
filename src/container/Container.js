import React from 'react'
import Message from '../message/Message.js'


export const Container = (props) => {
    
    return (
    <>
        <Message className={'message ' + props.className} title={props.title}>
           {props.children}    
        </Message>
        
       
    </>
    )
}

export default Container