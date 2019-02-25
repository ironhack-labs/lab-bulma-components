import React from "react"

export default (classs,name,placeholder,type) =>{
    return <div class="field">
        <div class="control">
            <input class={classs} name={name} placeholder={placeholder} type={type}/>
        </div>
    </div>
}