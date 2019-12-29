import React from "react";
import Header from "./Header";
import Action from "./Action";
import Options from "./Options";
import AddOption from "./AddOption";
import OptionModal from "./OptionModal";

export default class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  };

  resetSelectedOption = () => {
    this.setState(() => ({ selectedOption: undefined }));
  };

  handlePickOption = () => {
    let option = this.state.options[
      Math.floor(Math.random() * this.state.options.length)
    ];
    this.setState(() => ({ selectedOption: option }));
    // alert(
    //   this.state.options[Math.floor(Math.random() * this.state.options.length)]
    // );
  };

  handleRemoveOption = optionId => {
    this.setState(prevState => ({
      options: prevState.options.filter((op, idx) => idx !== optionId)
    }));
  };

  handleAddOption = option => {
    if (!option) {
      return `Invalid option. Please specify a valid option.`;
    } else if (this.state.options.indexOf(option) > -1) {
      return `This option allready exists`;
    }
    this.setState(prevState => ({ options: [...prevState.options, option] }));
  };

  handleClearAllOptions = () => {
    this.setState(() => ({ options: [] }));
  };

  componentDidMount() {
    try {
      let options = JSON.parse(localStorage.getItem("indecisionApp_options"));
      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {
      console.log(`Error fetching data from localstorage : ${e}`);
    }
  }
  componentDidUpdate(prevProps, prevState) {
    try {
      if (this.state.options) {
        localStorage.setItem(
          "indecisionApp_options",
          JSON.stringify(this.state.options)
        );
      }
    } catch (e) {
      console.log(`Error updating data to localstorage : ${e}`);
    }
  }

  render() {
    return (
      <div>
        <Header
          title="Indecision"
          subtitle="Put your life in hands of a computer."
        />
        <div className="container">
          <Action
            hasOptions={this.state.options.length > 0}
            handlePickOption={this.handlePickOption}
          />
          <div className="widget">
            <Options
              options={this.state.options}
              handleRemoveOption={this.handleRemoveOption}
              handleClearAllOptions={this.handleClearAllOptions}
            />
            <AddOption handleAddOption={this.handleAddOption} />
          </div>
        </div>
        <OptionModal
          selectedOption={this.state.selectedOption}
          resetSelectedOption={this.resetSelectedOption}
        />
      </div>
    );
  }
}
