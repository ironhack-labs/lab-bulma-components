import React from "react"

export default ({classs, content}) => {
    return <div>
        <button className={classs}>{content}</button>
    </div>
}