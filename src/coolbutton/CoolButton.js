import React from 'react'

// with function use the name.property to access values
// with Object, use this.


function CoolButton (props){ // replaced props by elementsArray

    // elementsArray = "isSmall isSuccess"
    let extImput = "isSmall isSuccess"
    let arrayImput = extImput.split(" ") // ["isSmall", "isSuccess"]
    let newArray = []
    
    extImput.forEach(word =>{
        word = word.slice(2); // "Small" / "Success"
        word = word.toLowerCase(); // "small" / "success"
        word = "is-"+ word; // "is-small" / "is-success"
        newArray.push(word) // newArray = ["is-small", "is-success"]
        })

    let myClasses = "";
    for (let i=0; i < newArray.length; i++){
        myClasses.concat(newArray[i]) // myClasses = "is-small is-success"
        }
        myClasses.unshift("button ")// myClasses = "button is-small is-success"


    props.className = myClasses

    return (

        <div>
            <button className={props.className}></button>
        </div>
    )
        
}

export default CoolButton