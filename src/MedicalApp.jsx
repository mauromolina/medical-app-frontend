import React from "react";
import { Provider } from "react-redux";
import { AppRouter } from "./router";
import { store } from "./state";

const MedicalApp = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};

export default MedicalApp;
