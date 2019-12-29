import React from "react";

const Option = props => (
  <div className="option">
    <p className="option__text">{props.id+1}. {props.itemValue}</p>
    <button 
      className="button button--link" 
      onClick={() => props.handleRemoveOption(props.id)}
    >remove</button>
  </div>
);

export default Option;
