import React from 'react'

class Nav extends React.Component {

  render() {

    return (


      <nav class='navbar is-transparent is-fixed-top'>
        <div class='navbar-start'>
          <a href="" class='navbar-item'>Home</a>
          <a href="" class='navbar-item'>Other</a>
        </div>

        <div class='navbar-end'>
          <a href="" class='navbar-item button is-primary space'>Login</a>
          <a href="" class='navbar-item button is-info space'>Sign Up</a>
        </div>

      </nav>
    )
  }
}

export default Nav;