import {axiosServices} from "./axios.services";
import {urls} from "../constants";

export const movieServices = {
    getAll:(page=1)=>axiosServices.get(urls.movie.popular,{params:{page}}),
    getById:(id)=>axiosServices.get(`${urls.movie.movie}/${id}`),
    getCast:(id)=>axiosServices.get(`${urls.movie.movie}/${id}/credits`),
    getByQuery:(query)=>axiosServices.get(urls.movie.getByQuery,{params:{query}}),
    getTopRated:(page=1)=>axiosServices.get(urls.movie.topRated,{params:{page}}),
    getNew:(page=1)=>axiosServices.get(urls.movie.new,{params:{page}}),
    getByGenre:(page=1,genreId)=>axiosServices.get(urls.movie.genre,{params:{page,with_genres:`${genreId}`}})
}