import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Navbar from './navbar/Navbar';
import Button from './button/Button';

import FormField from './formfield/FormField';
ReactDOM.render(
    <div>
        <Navbar />
        <FormField label="Name" placeholder="e. g. Lola Mento" />
        <FormField label="Email" placeholder="e. g. LolaMento@gmail.mento" />
        <FormField label="Password" placeholder="123456789" />

        <Button val="Submit" que="button is-danger" />




    </div>,





    document.getElementById('root'));


