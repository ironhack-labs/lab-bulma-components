import React from "react";

const FormField = props => {
  console.log(props);
  return (
    <div className="field">
      <label className="label">{props.user.label}</label>
      <div className="control">
        <input
          className="input"
          type="text"
          placeholder={props.user.placeholder}
        />
      </div>
    </div>
  );
};

const UserInfo = {
  label: "Name",
  placeholder: "Alex Smith"
};

const EmailInfo = {
  label: "Email",
  placeholder: "alexsmith@gmail.com"
};

const Form = () => {
  return (
    <div>
      <FormField user={UserInfo} />
      <FormField user={EmailInfo} />
    </div>
  );
};

export default Form;
