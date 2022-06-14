import {axiosServices} from "./axios.services";
import {urls} from "../constants";

export const actorsService={
    getById:(id)=>axiosServices.get(`${urls.actors.actors}/${id}`),
    getAll:(page=1)=>axiosServices.get(urls.actors.popular,{params:{page}}),
    getByQuery:(page=1,query)=>axiosServices.get(urls.actors.byQuery,{params:{page,query}}),
    getFilm:(actorId)=>axiosServices.get(`${urls.actors.actors}/${actorId}/movie_credits`),

}
