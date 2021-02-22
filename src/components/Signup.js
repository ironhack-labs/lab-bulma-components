import "./Signup.css"
import Navbar from "./Navbar"
import FormField from "./FormField"
import CoolButton from "./CoolButton"

const Signup = () => (
  <>
    <Navbar />
    <main>
      <form>
        <FormField
          className="mt-2"
          label="Name"
          type="text"
          placeholder="e.g. AlexSmith"
        />
        <FormField
          className="mt-2"
          label="Email"
          type="email"
          placeholder="e.g. alexsmith@gmail.com"
        />
        <FormField className="mt-2" label="Password" type="password" />
        <CoolButton isPrimary className="mt-3 is-rounded">
          Submit
        </CoolButton>
      </form>
    </main>
  </>
)

export default Signup
