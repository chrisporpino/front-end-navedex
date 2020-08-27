import axios from "axios";

const api = axios.create({
  baseURL: "https://navedex-api.herokuapp.com/v1",
});

const getToken = () => window.localStorage.getItem("token");

export const headers = {
  Authorization: `Bearer ${getToken()}`,
};

export default api;
