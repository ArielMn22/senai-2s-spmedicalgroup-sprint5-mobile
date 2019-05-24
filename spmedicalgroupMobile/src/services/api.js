import axios from "axios";
import { AsyncStorage } from 'react-native';

const api = axios.create({
  // baseURL: "http://192.168.3.143:5000/api"
  baseURL: "http://192.168.56.1:5000/api"
});

export default api;