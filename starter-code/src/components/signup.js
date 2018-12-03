import React from "react";


class Signup extends React.Component {
  render() {
    return (
      <div className="signup-container">

        <Navbar/>
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <FormField label="Password" type="password" placeholder="*****" />
        <CoolButton isSmall isLarges isDanger is-link className="is-rounded my-class">Submit</CoolButton>
      </div>
    );
  }
}

export default Signup;
