import axios from "axios"
const axiosInstance = axios.create({
    baseURL: "https://myecommercyapi.herokuapp.com/"
})
export default axiosInstance;