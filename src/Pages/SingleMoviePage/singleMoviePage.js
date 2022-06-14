import React from 'react';
import { useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {MovieDetail} from "../../components";
import {movieServices} from "../../services/movie.services";
import {Loader} from "../../UI";


const SingleMoviePage = () => {
    const [movieDetail, setMovieDetail] = useState('');
    const {movieId} = useParams();


    useEffect(() => {
            movieServices.getById(movieId).then(({data})=>setMovieDetail(data))
    }, [movieId])


    return (
        <div>
            {movieDetail?<MovieDetail movieDetail={movieDetail}/>:<Loader/>}
        </div>
    );
};

export {SingleMoviePage};