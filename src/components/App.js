import "./App.css"
import Navbar from "./Navbar"
import FormField from "./FormField"

function App() {
  return (
    <>
      <Navbar />
      <FormField label="Name" type="text" placeholder="e.g. AlexSmith" />
      <FormField
        label="Email"
        type="email"
        placeholder="e.g. alexsmith@gmail.com"
      />
    </>
  )
}

export default App
