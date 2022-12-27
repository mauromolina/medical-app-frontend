import { useDispatch, useSelector } from "react-redux";
import calendarApi from "../api/calendarApi";
import { checking, cleanErrors, login, logout, onLogout } from "../store";

export const useAuthStore = () => {
  const dispatch = useDispatch();
  const { status, user, error } = useSelector((state) => state.auth);

  const handleAuthRequest = async (url, userData) => {
    dispatch(checking());
    const { data } = await calendarApi.post(url, userData);
    localStorage.setItem("token", data.token);
    localStorage.setItem("token-init-date", new Date().getTime());
    dispatch(login({ name: data.user.name, uid: data.uid }));
  };

  const handleAuthRequestError = (err) => {
    dispatch(logout(err.response.data.msg));
    setTimeout(() => {
      dispatch(cleanErrors());
    }, 3000);
  };

  const startLogin = async ({ email, password }) => {
    try {
      await handleAuthRequest("/auth", { email, password });
    } catch (err) {
      handleAuthRequestError(err);
    }
  };

  const startRegister = async (userData) => {
    try {
      await handleAuthRequest("/auth/new", userData);
    } catch (err) {
      handleAuthRequestError(err);
    }
  };

  const checkAuthToken = async () => {
    const token = localStorage.getItem("token");
    if (!token) return dispatch(logout());
    try {
      const { data } = await calendarApi.get("/auth/refresh-token");
      localStorage.setItem("token", data.token);
      console.log({ data });
      dispatch(login({ name: data.user.name, uid: data.user.uid }));
    } catch (err) {
      localStorage.clear();
      dispatch(logout());
    }
  };

  const startLogout = async () => {
    localStorage.clear();
    dispatch(onLogout());
    dispatch(logout());
  };

  return {
    error,
    status,
    user,
    checkAuthToken,
    startLogin,
    startLogout,
    startRegister,
  };
};
