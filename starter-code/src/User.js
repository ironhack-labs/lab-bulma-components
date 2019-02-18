import React, { Component } from "react";

function displayAvatar(avatarUrl) {
  if (avatarUrl) {
    // no quotes when using {} with HTML attributes
    return <img src={avatarUrl} />;
  } else {
    return (
      <img src="https://s3.amazonaws.com/owler-image/logo/ironhack_owler_20180828_221413_original.png" />
    );
  }
}

class User extends Component {
  // every component class needs a render() method
  // (defines the component's content with the..)
  render() {
    // this.props is the object with the info being sent to the component
    console.log(this.props);

    // <User firstName="Pablo" />
    //
    // this.props= { firstName: "Pablo" }

    const { firstName, lastName, email } = this.props;

    // render() returns the HTML of this component's content
    // (use parenthesis when returning multiple lines of HTML)
    return (
      // use "className" instead of "class" for styling your HTML
      <div className="User">
        <p>
          Welcome, {firstName} {lastName}! This is your email: {email}.
        </p>
        {/* call a function in {} to display its result */}
        {displayAvatar()}
      </div>
    );
  }
}

//if we ant to style this piece we should have a css file for this component (User.css)
export default User;
