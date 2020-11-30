import React from 'react' ;
import 'bulma/css/bulma.css';
import CoolButton from '../coolButton/CoolButton';

export default function Navbar() {
    return (
        <div class="navbar is-fixed-top">
            <div class="navbar-brand">
                <img class="navbar-item" src="https://bulma.io/images/bulma-logo.png" alt="BULMA logo" width="20%" height="10%"/>
                <a class="navbar-link" href="#">Home</a>
                    <div class="navbar-start">      
                        <CoolButton
                            // className="button is-rounded my-class is-danger is-small"
                            label="auths"
                            nameForRed="Login"
                            // nameForGreen="Signup"
                            urlforRed= '#'
                            // urlforGreen ='/signup'
                            classNameForRed="button is-rounded my-class is-danger is-small"
                            // classNameForGreen="button is-small is-success"
                        />
                         <CoolButton
                            // className="button is-rounded my-class is-danger is-small"
                            label="auths"
                            nameForRed="Signup"
                            // nameForGreen="Signup"
                            urlforRed= '/signup'
                            // urlforGreen ='/signup'
                            classNameForRed="button is-small is-success"
                            // classNameForGreen="button is-small is-success"
                        />
                    </div>  
            </div>
        </div>
    ) 
}


{/* <button className="button is-rounded my-class is-danger is-small"> */}
// button is-rounded my-class is-danger is-small