import {axiosServices} from "./axios.services";
import {urls} from "../constants";

export const HomeService = {
    getTrending:(page=1)=>axiosServices.get(urls.home.home,{params:{page}}),
}