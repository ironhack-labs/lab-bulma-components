import React from "react"




function Buttons(props) {
    return (
      <div className='field'>
        <div>
          <button className="button">{props.label}</button>
        </div>
      </div>
    );
  };


  export default Buttons