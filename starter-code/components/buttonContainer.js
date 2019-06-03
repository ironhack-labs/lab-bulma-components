import React from 'react'
import CoolButton from "../components/CoolButton"
const buttonsContainer = () => {
return (
    <section>
        <CoolButton isSmall isDanger className="is-rounded my-class">Login</CoolButton>
        <CoolButton isSmall isSuccess>Signup</CoolButton>
    </section>
)}
export default buttonsContainer