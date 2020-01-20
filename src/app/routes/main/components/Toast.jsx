import React from "react";

const Toast = ({ message }) => {
  return (
    <div
      className="card-panel teal green lighten-1 m0"
      style={{ color: "#fff" }}
    >
      {message}
    </div>
  );
};

export default Toast;
