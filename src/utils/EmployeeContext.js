import React from "react";
import employees from "../employees.json"
//default context object

const EmployeeContext = React.createContext({
    employees,
    name: "Bill"
})