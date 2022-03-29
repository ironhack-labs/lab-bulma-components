
import { render } from "@testing-library/react";
import FormField from "./FormField";

const LoginForm = () => {
    render(
      <section className="section is-medium">
          <form>
            <FormField type="password" label="LOGIN" placeholder="LOGIN"  />
            <div className="control">
                <button className="button is-primary">Submit</button>
            </div>
            </form>
      </section>
    );
};

export default LoginForm;
