import React from "react";

function Signup() {
  return (
    <div>
      <Navbar />
      <form>
        <FormField label="Name" type="text" placeholder="Justine Jeanne" />
        <FormField label="Email" type="email" placeholder="justine@gmail.com" />
        <FormField label="Password" type="password" placeholder="********" />
        {/* <CoolButton type="submit" isPrimary>
          Submit
        </CoolButton> */}
      </form>
    </div>
  );
}

export default Signup;
