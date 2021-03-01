import React, { Component } from "react";
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Form from "./components/Form";
import employees from "./employees.json";

class App extends Component {
  // Setting this.state.employees to the employees json array
  state = {
    employees,
    name: "bill"
  };

  removeEmployee = id => {
    // Filter this.state.employees for employees with an id not equal to the id being removed
    const employees = this.state.employees.filter(employee => employee.id !== id);
    // Set this.state.employees equal to the new employees array
    this.setState({ employees });
  };

  //pulled sorting from stackoverflow
  compareName = ( a, b ) => {
    if ( a.name < b.name ){
      return -1;
    }
    if ( a.name > b.name ){
      return 1;
    }
    return 0;
  }
  
  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    // employees = this.state.employees.filter(employee => employee.name.includes(value))

    // Updating the input's state
    this.setState({
      [name]: value,
      employees
    });
  };

  sortByName = (objs) => {
    console.log(objs)
    this.setState(objs.sort(this.compareName));
  };

  // Map over this.state.employees and render a employeeCard component for each employee object
  render() {
    return (
      <Wrapper>
        <Form name={this.state.name} inputChange={this.handleInputChange}/>
        <Title>Employee Directory</Title>
        <button onClick={() => this.sortByName(employees)}>Sort by Name</button>
        {this.state.employees.map(employee => (
          <EmployeeCard
            removeEmployee={this.removeEmployee}
            id={employee.id}
            key={employee.id}
            name={employee.name}
            image={employee.image}
            occupation={employee.occupation}
            location={employee.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
