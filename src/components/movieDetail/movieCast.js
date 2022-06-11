import React, {useEffect, useState} from 'react';

import {movieServices} from "../../services/movie.services";
import {CastCard} from './index';
import classes from './castCard.module.css';
import {Loader} from "../../UI";

const MovieCast = ({movieId}) => {
    const [castActors,setCast] = useState();
    useEffect(()=>{
        movieServices.getCast(movieId).then(({data})=>setCast(data.cast.splice(0,5).filter(item=>item.profile_path)));
    },[movieId])

    return (
        <div className={classes.wrap}>
            {castActors?castActors.map(actor=><CastCard key={actor.id} actor={actor}/>):<Loader/>}
        </div>
    );
};

export {MovieCast};