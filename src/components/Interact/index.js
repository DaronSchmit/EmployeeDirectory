import React from "react";

function Interact(props){
    if(props.data.query === "sort"){
        return(
            <button onClick={props.handleOnClick}>{props.data.query}</button>
        )
    }
    return(
        <input 
        value={props.search}
        name="name"
        onChange={props.handleInputChange}
        type="text"
        placeholder="Employee Name"
      />
    )
}

export default Interact;