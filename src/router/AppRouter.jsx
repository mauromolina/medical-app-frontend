import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Spinner } from "../components/Spinner";
import { useAuthStore } from "../hooks";
import { CalendarPage, LoginPage } from "../pages";

const AppRouter = () => {
  const { status, checkAuthToken } = useAuthStore();
  const isAuth = status === "auth";

  useEffect(() => {
    checkAuthToken();
  }, []);

  if (status === "checking") return <Spinner />;

  //Refactor private and public routes

  return (
    <Routes>
      {isAuth ? (
        <>
          <Route path="/" element={<CalendarPage />} />
          <Route path="/*" element={<Navigate to={"/"} />} />
        </>
      ) : (
        <>
          <Route path="/auth/*" element={<LoginPage />} />
          <Route path="/*" element={<Navigate to={"/auth/login"} />} />
        </>
      )}
    </Routes>
  );
};

export default AppRouter;
