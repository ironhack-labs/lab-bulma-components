import "./App.css"
import Navbar from "./Navbar"
import FormField from "./FormField"
import CoolButton from "./CoolButton"

function App() {
  return (
    <>
      <Navbar />
      <main>
        <FormField label="Name" type="text" placeholder="e.g. AlexSmith" />
        <FormField
          label="Email"
          type="email"
          placeholder="e.g. alexsmith@gmail.com"
        />
        <CoolButton isSmall isDanger className="is-rounded my-class">
          Button 1
        </CoolButton>
        <CoolButton isSmall isSuccess>
          Button 2
        </CoolButton>
      </main>
    </>
  )
}

export default App
