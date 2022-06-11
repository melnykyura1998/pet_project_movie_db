import axios from "axios";
import baseURL from "../constants/urls";

const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMWJmMjZhMDcyNzRkNjM0MmM1YjMyZjIyOGVkM2I4OSIsInN1YiI6IjYyOTg5OGNhZDQ4Y2VlMmM0NWM4MTIyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QqyNrEvvf8M4U3YZtMVPqfjlXZj_lhGTmos0MtsX3oQ'

export const axiosServices = axios.create({baseURL})
axiosServices.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${token}`;
    return config
})
