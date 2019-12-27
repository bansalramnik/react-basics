import React from "react";

const ErrorLayout = props => {
  return (
    <div>
      <em>{props.children}</em>
    </div>
  );
};

export default ErrorLayout;
