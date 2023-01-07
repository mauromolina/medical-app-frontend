import { useDispatch, useSelector } from "react-redux";
import { logout, onLogout } from "../state";
import { useLazyRefreshTokenQuery } from "../state/query/auth";

export const useAuthStore = () => {
  const dispatch = useDispatch();
  const { status, user, error } = useSelector((state) => state.auth);
  const [refreshToken] = useLazyRefreshTokenQuery();

  const checkAuthToken = async () => {
    const token = localStorage.getItem("token");
    if (!token) return dispatch(logout());
    refreshToken();
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
    startLogout,
  };
};
