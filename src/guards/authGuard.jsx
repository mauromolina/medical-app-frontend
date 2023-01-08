import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../hooks";
import { PublicRoutes } from "../utils/constants";

const AuthGuard = () => {
  const { user } = useAuthStore();

  return user.uid ? <Outlet /> : <Navigate replace to={PublicRoutes.LOGIN} />;
};

export default AuthGuard;
