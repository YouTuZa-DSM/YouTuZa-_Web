import React from "react";

const Child = ({ children, ...props }) => {
  const child = React.Children.only(children);

  return React.isValidElement(child) ? React.cloneElement(child, props) : <></>;
};

export default Child;
