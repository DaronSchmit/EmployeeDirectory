import React from "react";
import Form from "../Form";

function Search (props){
    return(
        <div className="row">
                <Form handleOnClick={props.handleOnClick} handleAttributeChange={props.handleAttributeChange} handleQueryChange={props.handleQueryChange} handleInputChange={props.handleInputChange} data={props.data} />
        </div>
    )
}

export default Search;