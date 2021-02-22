import "./Signup.css"
import Navbar from "./Navbar"
import FormField from "./FormField"
import CoolButton from "./CoolButton"

const Signup = () => (
  <>
    <Navbar />
    <main>
      <form>
        <FormField label="Name" type="text" placeholder="e.g. AlexSmith" />
        <FormField
          label="Email"
          type="email"
          placeholder="e.g. alexsmith@gmail.com"
        />
        <FormField label="Password" type="password" />
        <CoolButton isSmall isDanger className="is-rounded">
          Button 1
        </CoolButton>
      </form>
    </main>
  </>
)

export default Signup
