import React, {Component} from "react";
import 'bulma/css/bulma.css'
import './Navbar.css'
import CoolButton from "../CoolButton/CoolButton";
class Navbar extends Component {
    render (){
        return (
            <nav className='navbar is-transparent'>
                <div>
                    <img src = 'https://bulma.io/images/bulma-logo.png' className = 'logo'></img>
                    <p>
                        Home
                    </p>
                </div>
                <div>
                    <CoolButton text = 'Login' className= 'button is-small is-info'></CoolButton>
                    <CoolButton text = 'Signup' className= 'button is-small is-success' href = '../Signup'></CoolButton>
                    
                </div>
            </nav>
        )
    }
}

export default Navbar