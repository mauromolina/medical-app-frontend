import React from "react";
import "./Spinner.css";

export const Spinner = () => {
  return (
    <div className="spinner-container">
      <div className="custom-loader"></div>
      <span className="spinner-msg">Iniciando sesión...</span>
    </div>
  );
};
