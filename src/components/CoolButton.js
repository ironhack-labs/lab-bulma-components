import SignUpForm from "./SignupForm";
import LoginForm from "./LoginForm";

const CoolButton = (props) => {
  if (props.isSuccess) {
    return (
      <button className="button is-success" onClick={SignUpForm}>
        {props.children}
      </button>
    );
  } else {
    return (
      <button className="button" onClick={LoginForm}>
        {props.children}
      </button>
    );
  }
};

export default CoolButton;
