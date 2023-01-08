import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Navigate, Route } from "react-router-dom";
import { Spinner } from "../components/Spinner";
import AuthGuard from "../guards/authGuard";
import { useAuthStore } from "../hooks";
import { PrivateRoutes, PublicRoutes, TEXTS } from "../utils/constants";
import { RoutesWithNotFound } from "./";

const Login = lazy(() => import("../pages/LoginPage"));
const Private = lazy(() => import("./PrivateRouter"));

const AppRouter = () => {
  const { checkAuthToken } = useAuthStore();

  useEffect(() => {
    checkAuthToken();
  }, []);

  return (
    <Suspense fallback={<Spinner text={TEXTS.LOADING} />}>
      <BrowserRouter>
        <RoutesWithNotFound>
          <Route path="/" element={<Navigate to={PrivateRoutes.PRIVATE} />} />
          <Route path={PublicRoutes.LOGIN} element={<Login />} />
          <Route element={<AuthGuard />}>
            <Route path={`${PrivateRoutes.PRIVATE}/*`} element={<Private />} />
          </Route>
        </RoutesWithNotFound>
      </BrowserRouter>
    </Suspense>
  );
};

export default AppRouter;
