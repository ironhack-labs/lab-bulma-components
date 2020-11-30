import React from "react";
import "bulma/css/bulma.css";

const coolButton = (props) =>{
	return(

		<div className='Buttons'>
		<button class="button is-rounded my-class is-danger is-small">Log In</button>
		<button class="button is-small is-success">Sign Up</button>
		
		</div>
	)
};

export default coolButton;