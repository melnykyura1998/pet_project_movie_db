import React from 'react';
import {Outlet,useParams} from "react-router-dom";

import Movies from "../../components/movies/movies";

const MoviesPage = () => {
    const {movieId} = useParams();
    return (
        <div className={'page_wrapper'}>
            {movieId? <Outlet/>: <Movies/>}
        </div>
    );
};

export {MoviesPage};