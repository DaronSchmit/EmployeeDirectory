import React, { Component } from "react";

class Form extends Component {
  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
<form className="form">
          <input
            value={this.props.search}
            name="name"
            onChange={this.props.handleInputChange}
            type="text"
            placeholder="Employee Name"
          />
          <select onChange={this.props.handleCategoryChange}>
            <option id="0">name</option>
            <option od="1">occupation</option>
          </select>
        </form>

    );
  }
}

export default Form;
