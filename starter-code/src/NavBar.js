
import React, { Component } from 'react';
import './App.css';
import CoolButton from './CoolButton.js';



class NavBar extends Component{
    constructor(props){
        super(props)
        this.state = {
            isShowing: false,
        } 
    }

    changeUsername = (newUserName)=>{
        this.setState({username: newUserName})
    }

    render(){
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home<span className="sr-only">(current)</span></a>
                        </li>
                        <nav className="navbar navbar-light bg-light">
                            <form className="form-inline">
                                <CoolButton theText='login' theClass='btn btn-outline-info'/>
                            </form>
                            <form className="form-inline">
                                <CoolButton theText = 'signup' theClass='btn btn-outline-success'/>
                            </form>
                            <form className="form-inline">
                                <CoolButton modal theText = 'Dont press me' theClass='button is-danger is-rounded modal-button'/>
                            </form>
                        </nav>
                    </ul>
            </nav>
        );
    }
};

export default NavBar;