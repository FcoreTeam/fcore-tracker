import Cookies from "js-cookie";
import axios from "axios";

const $api = axios.create({
  baseURL: "http://localhost:8000/api",
  timeout: 10000,
  withCredentials: true,
});

export const refreshAccessToken = async () =>
  $api.get("/refresh").catch((err) => console.log(err));

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${Cookies.get("accessToken")}`;
  return config;
});

export const registerUser = async (data) =>
  $api.post("/register", data).catch((err) => console.log(err));

export const confirmMail = async (email) =>
  $api.post("/send_email", email).catch((err) => console.log(err));

export const activateUser = async (data) =>
  $api
    .post("/activate", data)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
