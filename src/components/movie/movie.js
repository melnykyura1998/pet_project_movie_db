import React from 'react';
import {useNavigate} from "react-router-dom";

import classes from "./movie.module.css";


const Movie = ({movie}) => {

    const navigate = useNavigate();
    const {id: movieId, poster_path, title} = movie;

    const tomovie = () => {
        navigate(`/movies/${movieId}`);
    }
    return (
        <div>
            <div onClick={tomovie}>
                <div className={classes.card_wrap}>
                    <div className={classes.poster_Card}><img
                        src={`http://image.tmdb.org/t/p/w200${poster_path}`}
                        className={classes.poster} alt=""/>
                    </div>
                    <div className={classes.title}>{title}</div>
                </div>
            </div>
        </div>
    );
};
export {Movie};