import React, { lazy } from "react";
import { Navigate, Route } from "react-router-dom";
import { PrivateRoutes } from "../utils/constants";
import RoutesWithNotFound from "./RoutesWithNotFound";

const Calendar = lazy(() => import("../pages/CalendarPage"));

const PrivateRouter = () => {
  return (
    <RoutesWithNotFound>
      <Route path="/" element={<Navigate to={PrivateRoutes.CALENDAR} />} />
      <Route path={PrivateRoutes.CALENDAR} element={<Calendar />} />
    </RoutesWithNotFound>
  );
};

export default PrivateRouter;
