import { ENDPOINTS } from "../../api";
import { cleanErrors, login, logout } from "../../store/auth/authSlice";

const endpoint = ENDPOINTS.AUTH;

export const postRegisterMutation = {
  query: (userData) => ({
    url: `${endpoint}/new`,
    method: "post",
    body: userData,
  }),
  invalidateTags: ["Auth"],
  async onQueryStarted(_args, { dispatch, queryFulfilled }) {
    try {
      const { data: response } = await queryFulfilled;
      if (response.data.ok) handleAuthDispatch(dispatch, response.data);
    } catch (err) {
      handleAuthErrorDispatch(dispatch, err);
    }
  },
};

export const postLoginMutation = {
  query: (userData) => ({
    url: endpoint,
    method: "post",
    body: userData,
  }),
  invalidateTags: ["Auth"],
  async onQueryStarted(_args, { dispatch, queryFulfilled }) {
    try {
      const { data: response } = await queryFulfilled;
      if (response.data.ok) handleAuthDispatch(dispatch, response.data);
    } catch (err) {
      handleAuthErrorDispatch(dispatch, err);
    }
  },
};

export const refreshTokenQuery = {
  query: () => ({
    url: `${endpoint}/refresh-token`,
  }),
  invalidateTags: ["Auth"],
  async onQueryStarted(_args, { dispatch, queryFulfilled }) {
    try {
      const { data: response } = await queryFulfilled;
      if (response.data.ok) handleRefreshToken(dispatch, response.data);
    } catch (err) {
      handleRefreshTokenError(dispatch, err);
    }
  },
};

const handleAuthDispatch = (dispatch, data) => {
  localStorage.setItem("token", data.token);
  localStorage.setItem("token-init-date", new Date().getTime());
  dispatch(login({ name: data.user.name, uid: data.uid }));
};

const handleAuthErrorDispatch = (dispatch, err) => {
  dispatch(logout(err.response.data.msg));
  setTimeout(() => {
    dispatch(cleanErrors());
  }, 3000);
};

const handleRefreshToken = (dispatch, data) => {
  localStorage.setItem("token", data.token);
  dispatch(login({ name: data.user.name, uid: data.user.uid }));
};

const handleRefreshTokenError = (dispatch, err) => {
  localStorage.clear();
  dispatch(logout());
};
