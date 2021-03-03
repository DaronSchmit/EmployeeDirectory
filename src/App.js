import React, { Component } from "react";
import axios from "axios";
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import employees from "./employees.json";
import UserCard from "./components/UserCard";
import Search from "./components/Search";

class App extends Component {
  // Setting this.state.employees to the employees json array
  state = {
    employees,
    search: "",
    query: "search",
    queryAttribute: "name",
    backup: employees,
    users: []
  };

  removeEmployee = id => {
    // Filter this.state.employees for employees with an id not equal to the id being removed
    const employees = this.state.employees.filter(employee => employee.id !== id);
    // Set this.state.employees equal to the new employees array
    this.setState({ employees });
  };

  //pulled sorting from stackoverflow
  compareBy = (a, b) => {
    if (a[this.state.queryAttribute] < b[this.state.queryAttribute]) {
      return -1;
    }
    if (a[this.state.queryAttribute] > b[this.state.queryAttribute]) {
      return 1;
    }
    return 0;
  }

  handleInputChange = event => {
    const { value } = event.target;
    const queryAttribute = [this.state.queryAttribute];
    this.setState({ name: value });
    const searchedEmployees = this.state.backup.filter(employee => {
      return employee[queryAttribute].toLowerCase().includes(value.toLowerCase());
    });
    this.setState({
      employees: searchedEmployees,
      search: value
    })
  }

  handleOnClick = (objs) => {
    console.log(`${this.state.query}ing by ${this.state.queryAttribute  }`)
    this.setState(objs.sort(this.compareBy));
  };

  handleAttributeChange = event => {
    const { value } = event.target;
    console.log(`Attribute changed to ${value}`);
    this.setState({
      queryAttribute: value
    })
  };

  handleQueryChange = event => {
    const { value } = event.target
    console.log(`Query changed to ${value}`);
    this.setState({
      query: value
    })
  }

  componentDidMount() {
    axios.get('https://randomuser.me/api/?inc=name,location,email,registered,id,picture&results=20&noinfo')
      .then(res => {
        const users = res.data;
        console.log(users);
        this.setState({ users });
      })
  }

  // Map over this.state.employees and render a employeeCard component for each employee object
  render() {
    return (
      <Wrapper>
        <Title>Employee Directory</Title>
        <Search handleQueryChange={this.handleQueryChange} handleAttributeChange={this.handleAttributeChange} handleInputChange={this.handleInputChange} handleOnClick={this.handleOnClick} data={this.state}/>
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
