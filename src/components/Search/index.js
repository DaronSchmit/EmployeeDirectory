import React from "react";
import Form from "../Form";

function Search (props){
    return(
        <row className="row">
            <div className="col">
                <Form handleOnClick={props.handleOnClick} handleAttributeChange={props.handleAttributeChange} handleQueryChange={props.handleQueryChange} handleInputChange={props.handleInputChange} data={props.data} />
            </div>
        </row>
    )
}

export default Search;