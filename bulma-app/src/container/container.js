
import React from 'react'
import '../message/node_modules/bulma/css/bulma.css'

const Container = props =>{
 return (
    <div className="container">
        <props.content/>
    </div>
 )
}

export default Container