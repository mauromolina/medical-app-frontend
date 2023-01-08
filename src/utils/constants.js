import { getEnv } from "../helpers";

export const ENVIRONMENT = getEnv();

export const API_ROOT = `${ENVIRONMENT.VITE_API_URL}`;

export const PublicRoutes = {
  LOGIN: "login",
};

export const PrivateRoutes = {
  PRIVATE: "app",
  CALENDAR: "calendar",
};

export const TEXTS = {
  LOADING: "Cargando...",
};
