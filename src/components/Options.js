import React from "react";
import Option from "./Option";

const Options = props => (
  <div>
    <br></br>
    <button
      disabled={props.options.length === 0}
      onClick={props.handleClearAllOptions}
    >
      Clear All Options
    </button>
    {props.options.length === 0 && (
      <p>Please add some options to get started</p>
    )}
    {props.options.map((option, index) => (
      <Option
        key={index}
        itemValue={option}
        id={index}
        handleRemoveOption={props.handleRemoveOption}
      />
    ))}
  </div>
);

export default Options;
