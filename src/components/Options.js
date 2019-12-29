import React from "react";
import Option from "./Option";

const Options = props => (
  <div>
    <div className="widget-header">
      <h3 className="widget-header__title">Your Options</h3>
      <button
        className="button button--link"
        disabled={props.options.length === 0}
        onClick={props.handleClearAllOptions}
      >
        Remove All
      </button>
    </div>
    {props.options.length === 0 && (
      <p className="widget__message">Please add some options to get started</p>
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
