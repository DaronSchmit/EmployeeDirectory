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
            <option id="0" query-attribute="name.last">last name</option>
            <option id="1" query-attribute="registered.date">registered</option>
          </select>
          <Interact data={props.data} handleOnClick={props.handleOnClick} handleInputChange={props.handleInputChange}/>
        </form>
    );
  }


export default Form;
