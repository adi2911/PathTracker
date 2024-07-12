import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const trackApi = axios.create({
  baseURL: "https://d139-103-180-42-166.ngrok-free.app",
});

trackApi.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("token");
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default trackApi;
