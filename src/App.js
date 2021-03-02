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
    search: "",
    searchBy:"name",
    backup: employees
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
    const {value} = event.target;
    const searchBy = [this.state.searchBy];
    this.setState({name:value});
    const searchedEmployees = this.state.backup.filter(employee => {
      return employee[searchBy].toLowerCase().includes(value.toLowerCase());
    });
    this.setState({
      employees: searchedEmployees,
      search: value
    })
  }

  sortByName = (objs) => {
    console.log(objs)
    this.setState(objs.sort(this.compareName));
  };

  handleCategoryChange = event => {
    const {value} = event.target
    this.setState({
      searchBy:value
    })
  }

  // Map over this.state.employees and render a employeeCard component for each employee object
  render() {
    return (
      <Wrapper>
      <div>
        <p>
          searching by {this.state.searchBy} for {this.state.search}
        </p>
        <Form handleCategoryChange={this.handleCategoryChange} handleInputChange={this.handleInputChange} search={this.state.search} />
      </div>        <Title>Employee Directory</Title>
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
