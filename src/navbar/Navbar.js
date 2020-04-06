import React from "react";
import 'bulma/css/bulma.css';
import Button from '../button/Button';

class Navbar extends React.Component {
    render() {
        return (

            <nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                    <a class="navbar-item" href="https://bulma.io">
                        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
                    </a>


                    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div class="navbar-end">
                    <div class="navbar-item">
                        <div class="buttons">
                            <Button que="button is-danger" />

                            <Button que="button is-dark" />

                        </div>
                    </div>
                </div>

            </nav>);
    }
}
export default Navbar;

// <nav class="navbar" role="navigation" aria-label="main navigation">
//     <div class="navbar-brand">
//         <a class="navbar-item" href="https://bulma.io">
//             <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
//         </a>


//         <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
//             <span aria-hidden="true"></span>
//             <span aria-hidden="true"></span>
//             <span aria-hidden="true"></span>
//         </a>
//     </div>
//     <div class="navbar-end">
//         <div class="navbar-item">
//             <div class="buttons">
//                 <a class="button is-primary">
//                     <strong>Sign up</strong>
//                 </a>
//                 <a class="button is-light">
//                     Log in
//           </a>
//             </div>
//         </div>
//     </div>

// </nav>