import React from "react";
import Form from "../form/Form";
import Button from "../coolButton/CoolButton";

const SignUp = () => {
    return(
        <>
        <h1>Registrate:</h1>
        <p>Name:</p>
        <Form label="Name" type="text" placeholder="e.g Alex Smith" />
        <p>Email:</p>
        <Form label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
         <p>Password:</p>
        <Form label="Password" type="password" placeholder="e.g tu contraseña" />
      <Button isDark
        className = "button is-rounded my-class"
        name="Enviar"
      />
      </>
    )
};

export default SignUp;
