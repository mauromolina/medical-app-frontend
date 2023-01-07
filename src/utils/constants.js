import { getEnv } from "../helpers";

export const ENVIRONMENT = getEnv();

export const API_ROOT = `http://${ENVIRONMENT.VITE_API_URL}`;
// export const API_ROOT = `https://${ENVIRONMENT.VITE_API_URL}`;
