import React from 'react';




class Nav extends React.Component{
    
    render(){
    
        
        return( 
                <nav>

                    <div className="logo-box">
                     <img src="https://bulma.io/images/bulma-logo.png" />
                    </div>
                    <li>Home</li>
                    <li className='Second-Last'>Button1</li>
                    <li className='Last'>Button2</li>
                </nav>

        );
    
        }
    
    }

export default Nav