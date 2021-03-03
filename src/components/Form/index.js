import React from "react";
import Interact from "../Interact";

function Form (props) {
    return (
      <div className="col-6 offset-4">
          <form className="form" aira-label="Default select">
              <select className="form-select" onChange={props.handleQueryChange}>
                <option id="0">search</option>
                <option id="2">sort</option>
              </select>
              By 
              <select onChange={props.handleAttributeChange}>
                <option id="0">name</option>
                <option id="1">registered</option>
                <option id="2">email</option>
              </select>
              <Interact data={props.data} handleOnClick={props.handleOnClick} handleInputChange={props.handleInputChange}/>
            </form>
      </div>

    );
  }


export default Form;
