import React, {Component} from 'react';
import '../public/styles/styles.css';
import FormField from './FormField';
import CoolButton from './CoolButton'

class signUp extends Component{
    render(){
        return(
            <div>
                <FormField placeHolder="Nombre" iLabel="Nombre" iType="text"/>
                <FormField placeHolder="Correo" iLabel="Correo" iType="text"/>
                <FormField placeHolder="Contraseña" iLabel="Contraseña" iType="password"/>
                <CoolButton classButton="especialClass button my-class is-success is-medium" buttonName="Sign up"/>
            </div>
        )
    }
}

export default signUp;