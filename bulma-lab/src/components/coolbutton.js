import React from 'react';

export default class Coolbutton extends React.Component {

    render(){

        return (

            
            <button className = {this.props.styles}> {this.props.buttonName} </button>

            
        )

    }

}