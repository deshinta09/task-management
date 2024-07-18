import axios from "axios";

const serverUrl = "http://localhost:8000/api";
const instance = axios.create({ baseURL: serverUrl });

export default instance;
