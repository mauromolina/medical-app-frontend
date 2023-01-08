import { useSnackbar } from "notistack";

let useSnackbarRef;
export const SnackbarUtilitiesConfigurator = () => {
  useSnackbarRef = useSnackbar();
};

export const SnackbarUtilities = {
  toast(msg, variant) {
    useSnackbarRef.enqueueSnackbar(msg, { variant });
  },
  success(msg) {
    this.toast(msg, "success");
  },
  error(msg) {
    this.toast(msg, "error");
  },
  warning(msg) {
    this.toast(msg, "warning");
  },
  info(msg) {
    this.toast(msg, "info");
  },
};
