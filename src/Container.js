import React from 'react'
import ReactDOM from 'react-dom'

const Container = (props) => {
    return (
        <div className="container">
            {props.children}
        </div>
    )
}

export default Container