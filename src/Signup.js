import React from 'react';
import Navbar from './Navbar'
import FormField from './FormField'
import CoolButton from './CoolButton';

export default function Signup() {
    return (
        <div >
            <Navbar />
            <div className="container">
            <FormField 
            label="Name" 
            type="text" 
            placeholder="e.g Toni Sanchez"/>
            <FormField 
            label="Email" 
            type="email" 
            placeholder="e.g toni@sanchez.com"/>
            <CoolButton 
            text="Submit"
            className="button rounded is-success is-small my-class"
            />
            </div>
        </div>
    )
}