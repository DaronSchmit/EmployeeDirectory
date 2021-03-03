import React from "react";
import Interact from "../Interact";

function Form (props) {
    return (
      <form className="form">
          <select onChange={props.handleQueryChange}>
            <option id="0">search</option>
            <option id="1">filter</option>
            <option id="2">sort</option>
          </select>
          By 
          <select onChange={props.handleAttributeChange}>
            <option id="0">name</option>
            <option id="1">occupation</option>
          </select>
          <Interact data={props.data} handleOnClick={props.handleOnClick} handleInputChange={props.handleInputChange}/>
        </form>
    );
  }


export default Form;
