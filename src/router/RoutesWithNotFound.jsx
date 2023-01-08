import React from "react";
import { Route, Routes } from "react-router-dom";
import { NotFound } from "../pages";

const RoutesWithNotFound = ({ children }) => {
  return (
    <Routes>
      {children}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default RoutesWithNotFound;
