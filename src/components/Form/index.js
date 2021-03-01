import React, { Component } from "react";

class Form extends Component {
  // Setting the component's initial state
  state = {
    name: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };


  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <p>
          searching for {this.props.name} {this.state.name}
        </p>
        <form className="form">
          <input
            value={this.state.name}
            name="name"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Employee Name"
          />
        </form>
      </div>
    );
  }
}

export default Form;
