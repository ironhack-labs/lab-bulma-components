import React from "react";
import "bulma/css/bulma.css";
import Navbar from "../navbar/Navbar";
import FormField from "../formfield/FormField";
import CoolButton from "../coolButton/CoolButton";
import "./Signup.css";

const Signup = ({dataForm}) => {

  // const classArr = [{isSmall, isDanger, isRounded}, {isSmall, isSuccess }];

    return (
        <div>
        <Navbar />
        {dataForm.map((elem, idx) =>  <FormField key= {idx} {...elem} />)}
        {/* <CoolButton className='button is-rounded my-class is-danger is-small'> Button 1</CoolButton>
        <CoolButton className='button is-small is-success'>Button 2</CoolButton> */}
        <div className="btn">
        <CoolButton isSmall isDanger isRounded className='button my-class'> Button 1</CoolButton>
        <CoolButton isSmall isSuccess className='button'>Button 2</CoolButton>
        </div>
        {/* {classArr.map((elem, idx) => <CoolButton key={idx} {...elem} className='button' /> )} */}
      </div>

    )
}

export default Signup;
