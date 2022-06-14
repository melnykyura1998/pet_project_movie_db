import React from 'react';
import { useNavigate} from "react-router-dom";
import classes from "./singleActor.module.css";

const MovieCard = ({movie}) => {

    const navigateto = useNavigate();
    const {poster_path, title,id:movieId} = movie;
    const toMovie = ()=>{
        navigateto(`/movies/${movieId}`);
    }

    return (
        <div onClick={toMovie} >
            <div className={classes.card}>
                <div className={classes.poster_Card}><img src={`http://image.tmdb.org/t/p/w200${poster_path}`} className={classes.poster} alt=""/></div>
                <div className={classes.title}>{title}</div>
            </div>
        </div>
    );
};

export default MovieCard;