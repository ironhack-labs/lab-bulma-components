import "./App.css"
import Signup from "./Signup"
import Message from "./Message"
import Container from "./Container"

function App() {
  return (
    <>
      <Signup />
      <Container>
        <Message className="mt-4" isInfo title="Hello World">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          <strong>Pellentesque risus mi</strong>.
        </Message>
      </Container>
    </>
  )
}

export default App
