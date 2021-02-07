import React from 'react'

function Rating (props){
    const mark = Math.round(props)
    if (mark === '1'){
        return "★☆☆☆☆" 
    }
    if (mark ==='2'){
        return "★★☆☆☆"
    }
    if (mark ==='3'){
        return "★★★☆☆"
    }
    if (mark ==='4'){
        return "★★★★☆"
    }
    if (mark ==='5'){
        return "★★★★★"
    }
    return(
        <div>{mark}</div>
    );
}

export default Rating

