import React, {useEffect, useState} from 'react';

import {actorsService} from "../../services/actors.service";
import MovieCard from "./movieCard";


const FilmsWithActor = ({actorId}) => {
    const [cast,setCast] = useState([]);
    useEffect(()=>{
       actorsService.getFilm(actorId).then(({data})=>setCast(data.cast.slice(0,5).filter(item => item.poster_path)))
    },[actorId])
    console.log(cast)
    return (
        <div >
            {cast.length > 0 ? <h3>Movies with the actor</h3>:''}
            <div style={{display: "flex",flexWrap:'wrap'}}>
                {cast.length > 0 ? cast.map(movie => <MovieCard key={movie.credit_id} movie={movie}/>) : ''}
            </div>
        </div>
    );
};

export {FilmsWithActor};