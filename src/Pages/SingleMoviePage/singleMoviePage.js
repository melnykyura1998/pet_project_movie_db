import React from 'react';
import {useLocation, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {MovieDetail} from "../../components";
import {movieServices} from "../../services/movie.services";
import {Loader} from "../../UI";

const SingleMoviePage = () => {
    const {state} = useLocation();
    const [movieDetail, setMovieDetail] = useState(state);
    const {movieId} = useParams();


    useEffect(() => {
        if (!state) {
            movieServices.getById(movieId).then(({data})=>setMovieDetail(data))
        } else {
            setMovieDetail(state)
        }
    }, [movieId, state])

    return (
        <div>
            {movieDetail?<MovieDetail movieDetail={movieDetail}/>:<Loader/>}
        </div>
    );
};

export {SingleMoviePage};