import "bulma/css/bulma.css";
import CoolButton from "./CoolButton";
import Navbar from "./Navbar";
import FormField from "./FormField";

const Signup = () => {
  return (
    <div>
      <Navbar />
      <form>
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <FormField label="Password" type="text" placeholder="e.g. password" />

      </form>
      <CoolButton isSmall isDanger className="login-button is-rounded my-class" name="Submit"></CoolButton>
    </div>
  );
};

export default Signup;
