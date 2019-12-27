import React from "react";

const Option = props => (
  <div>
    {props.itemValue}&nbsp;
    <button onClick={() => props.handleRemoveOption(props.id)}>remove</button>
  </div>
);

export default Option;
