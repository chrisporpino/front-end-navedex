import axios from "axios";

const api = axios.create({
  baseURL: "https://navedex-api.herokuapp.com/v1",
});

export const token = window.localStorage.getItem("token");

export const headers = {
  Authorization: `Bearer ${token}`,
};

export default api;
