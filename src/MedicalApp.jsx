import React from "react";
import { Provider } from "react-redux";
import { AppRouter } from "./router";
import { store } from "./state";
import { SnackbarUtilitiesConfigurator } from "./utils/snackbar";
import { SnackbarProvider } from "notistack";

const MedicalApp = () => {
  return (
    <Provider store={store}>
      <SnackbarProvider>
        <SnackbarUtilitiesConfigurator />
        <AppRouter />
      </SnackbarProvider>
    </Provider>
  );
};

export default MedicalApp;
