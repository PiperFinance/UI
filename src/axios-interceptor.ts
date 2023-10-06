import axios from "axios";
import { AxiosHeaders, AxiosRequestConfig, CreateAxiosDefaults } from "axios";

const baseURL = process.env.UA_URL
  ? process.env.UA_URL
  : "https://ua.piper.finance";

let config: CreateAxiosDefaults = {
  timeout: 1000 * 10, // 1 second
  //   withCredentials: true, // check cross-site Access-Control
  //   xsrfCookieName: "csrftoken",
  //   xsrfHeaderName: "X-CSRFToken",
};

export const axiosWithJWT = axios.create(config);

const ACCESS_TOKEN_KEY = "accessToken";
const REFRESH_TOKEN_KEY = "refreshToken";

const TokenService = {
  /**
   * Manage the how Access Tokens are being stored and retrieved from storage.
   *
   * Current implementation stores to localStorage. Local Storage should always be
   * accessed through this instance.
   **/
  getToken() {
    return localStorage.getItem(ACCESS_TOKEN_KEY);
  },

  saveToken(accessToken: string) {
    localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
  },

  removeToken() {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
  },

  getRefreshToken() {
    return localStorage.getItem(REFRESH_TOKEN_KEY);
  },

  saveRefreshToken(refreshToken: string) {
    localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
  },

  removeRefreshToken() {
    localStorage.removeItem(REFRESH_TOKEN_KEY);
  },
};

axiosWithJWT.interceptors.request.use(
  (config) => {
    // Add or remove auth header before request is sent
    const token = TokenService.getToken();
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    } else {
      delete config.headers["Authorization"];
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosWithJWT.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    // Intercept 401 response and retry
    const token = TokenService.getToken();
    if (error.response.status === 401 && token) {
      if (error.response.config.url.includes("/token/refresh")) {
        throw error;
      } else {
        try {
          const { data, status } = await axios.post(baseURL, {
            headers: {
              Authorization: `Bearer ${TokenService.getRefreshToken()}`,
            },
          });
          if (status == 200) {
            TokenService.saveToken(data.accessToken);
            TokenService.saveRefreshToken(data.refreshToken);
          }
          return axiosWithJWT.request({
            method: error.response.config.method,
            url: error.response.config.url,
            data: error.response.config.data,
          });
        } catch (e) {
          throw error;
        }
      }
    }
    return Promise.reject(error);
  }
);
