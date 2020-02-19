import React, { Component } from 'react'
import "./navbar.css"
//is-transparent
function Nav(props) {
  console.log(props)
  return (
    <div>

      <nav className="navbar " role="navigation" aria-label="dropdown navigation">
        <a className="navbar-item">
          <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: Free, open source, and modern CSS framework based on Flexbox" width={112} height={28} />
        </a>
        <div>
        <a className="navbar-link">
          Home
        </a>
        </div>
        <div className="navbar-item has-dropdown is-active navbar-end ">


          
          {props.children}
        </div>
      </nav>

    </div>
  );
}

//  class Nav extends Component {
// render (props) {
//   console.log(props)
//       return (
//         <div>
//
//           <nav className="navbar " role="navigation" aria-label="dropdown navigation">
//             <a className="navbar-item">
//               <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: Free, open source, and modern CSS framework based on Flexbox" width={112} height={28} />
//             </a>
//             <div>
//             <a className="navbar-link">
//               Home
//             </a>
//             </div>
//             <div className="navbar-item has-dropdown is-active navbar-end ">
//
//
//               <button className="button is-small is-success ">
//                 Login
//               </button>
//               <button className="button is-small is-success">
//                 signup
//               </button>
//             </div>
//           </nav>
//
//         </div>
//       );
//     }
//   };
export default Nav
