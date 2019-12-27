import React from "react";
import ErrorLayout from "./ErrorLayout";

export default class AddOption extends React.Component {
  state = {
    error: undefined
  };

  handleAddNewOption = event => {
    event.preventDefault();
    let error = this.props.handleAddOption(
      event.target.elements.option.value.trim()
    );
    event.target.elements.option.value = "";
    this.setState(() => ({ error }));
  };

  render() {
    return (
      <div>
        <br></br>
        {this.state.error && <ErrorLayout>{this.state.error}</ErrorLayout>}
        <form onSubmit={this.handleAddNewOption}>
          <input type="text" name="option" />
          <button type="submit">Add Option</button>
        </form>
      </div>
    );
  }
}
