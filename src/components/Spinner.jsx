import React from "react";
import "./Spinner.css";

export const Spinner = ({ text }) => {
  return (
    <div className="spinner-container">
      <div className="custom-loader"></div>
      <span className="spinner-msg">{text}</span>
    </div>
  );
};
