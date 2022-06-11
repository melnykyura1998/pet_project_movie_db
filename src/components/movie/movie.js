import React from 'react';
import {Link} from "react-router-dom";

import classes from "./movie.module.css";


const Movie = ({movie}) => {

    const {id: movieId, poster_path, title} = movie;

    return (
        <Link to={movieId.toString()} state={movie}>
            <div className={classes.card_wrap}>
                <div className={classes.poster_Card}><img src={`http://image.tmdb.org/t/p/w200${poster_path}`} className={classes.poster} alt=""/></div>
                <div className={classes.title}>{title}</div>
            </div>
        </Link>
    );
};
export {Movie};