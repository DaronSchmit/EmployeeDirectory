import React, { Component } from "react";
import axios from "axios";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import UserCard from "./components/UserCard";
import Search from "./components/Search";

class App extends Component {
  state = {
    search: "",
    query: "search",
    queryAttribute: "name",
    users: [],
    backup: []
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
  };

  handleInputChange = event => {
    const { value } = event.target;
    const queryAttribute = [this.state.queryAttribute];
    this.setState({ name: value });
    const searchedUsers = this.state.backup.filter(user => {
      return user[queryAttribute].toLowerCase().includes(value.toLowerCase());
    });
    this.setState({
      users: searchedUsers,
      search: value
    });
  };

  handleOnClick = (e) => {
    e.preventDefault();
    this.setState(this.state.users.sort(this.compareBy));

  };

  handleAttributeChange = event => {
    let { value } = event.target;
    if(value === "registered"){
      value="dateRegistered";
    };
    this.setState({queryAttribute: value})
  };

  handleQueryChange = event => {
    const { value } = event.target;
    this.setState({
      query: value
    })
  };

  componentDidMount(){
    axios.get('https://randomuser.me/api/?inc=name,location,email,registered,id,picture&results=20&noinfo')
        .then(res => {
        const users = res.data.results.map(user => (
          {
            name: user.name.last+', '+user.name.first,
            email: user.email,
            registered: new Date(user.registered.date).getTime(),
            dateRegistered: new Date(user.registered.date).toDateString(),
            picture: user.picture.medium,
            location: user.location.city+', '+user.location.state+', '+user.location.country
          }
        ));
        this.setState({users:users, backup: users});
        });
  };


  // Map over this.state.users and render a UserCard component for each employee object
  render() {
    return (
      <Wrapper>
        <Title>Employee Directory</Title>
        <Search handleQueryChange={this.handleQueryChange} handleAttributeChange={this.handleAttributeChange} handleInputChange={this.handleInputChange} handleOnClick={this.handleOnClick} data={this.state}/>
        <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 g-4">
          {this.state.users.map(user => (<UserCard user={user}/>))};
        </div>
      </Wrapper>
    );
  }
}

export default App;
