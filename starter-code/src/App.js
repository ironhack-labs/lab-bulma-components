import React from "react";

import CoolButton from "./button"
import FormField from "./form"
import Navbar from "./navbar"
import Signup from "./signup"




export const App = () => {
	return (
		<section>
			<Navbar/>
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      {/* <Signup/> */}
		</section>
	)
}