import React from 'react';
import {NavBar} from '../navbar/Navbar'
import {FormField} from '../formfield/FormField'
import {CoolButton} from '../coolbutton/CoolButton'
import  './Signup.css';

const Signup = props =>{
    
    return(
        <div className='container'>
            <NavBar />
                <div className="card is-wide ">
                    <div className="card-content">
                        <div className="columns is-mobile">
                            <div className="column is-11 is-offset-1">
                                <FormField label='Name' type='text' placeholder="e.g Alex Smith" />
                                <FormField label='Email' type='email' placeholder="e.g alex.smith@example.com" />
                                <FormField label='Password' type='password' />
                                <CoolButton class={['isLarge','isSuccess']} text={'login'}/>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
    
    }

export {Signup}