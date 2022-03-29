import FormField from "./FormField";
import React from "react";

// class SignUpForm extends React.Component {
    const SignUpForm = () => {
//  render() {
    return (
      <section className="section is-medium">
        <form>
          <FormField type="text" label="Name" placeholder="eg Chris" />
          <FormField type="email" label="Email" placeholder="eg chris@gmail.com" />
          <FormField type="password" label="password" placeholder="password" />
          <div className="control">
            <button className="button is-primary">Submit</button>
          </div>
        </form>
      </section>
    );
//   }
}

export default SignUpForm;
