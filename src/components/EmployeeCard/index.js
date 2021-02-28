import React from "react";

function EmployeeCard(props){
    return(
        <div className="employee-card">
            {props.name} {props.title} {props.tenure}
        </div>
    )
}