import React from "react";

const ErrorLayout = props => {
  return (
    <div>
      <p className="add-option-error">{props.children}</p>
    </div>
  );
};

export default ErrorLayout;
