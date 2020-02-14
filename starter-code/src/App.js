import React, { Component, Fragment } from "react";
import NavBar from "./components/NavBar";
import FormField from "./components/FormField";
import CoolButton from "./components/CoolButton";

class App extends Component {
    render() {
        return (
            <Fragment>
                <div>
                    <NavBar/>
                </div>
            
            <div>
                <FormField
                    styles={
                        {
                            width:"30%",
                            margin: "0 35%"
                        }
                    }
                />
            </div>
            <br/>
            <div>
                <CoolButton/>
            </div>
            </Fragment> 
        )
        }
    };
export default App;