import React from "react";
import "./ErrorDisplay.css";

const ErrorDisplay = ({ message }) => {
  if (!message) return null;

  return (
    <div className="error-display">
      <p>{message}</p>
    </div>
  );
};

export default ErrorDisplay;
