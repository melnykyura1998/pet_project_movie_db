import React, {useEffect, useState} from 'react';
import { useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

import {Movie, Pagination} from "../index";
import classes from "./movies.module.css";
import {movieServices} from "../../services/movie.services";
import {Loader} from "../../UI";



const Movies = () => {

    const [moviesValue, setMoviesValue] = useState();
    const { moviesTrigger, genreId, movieByQuery, status} = useSelector(state => state.movies);
    const [query, setQuery] = useSearchParams({page: '1'});


    useEffect(() => {
        if ( moviesTrigger === 'popular' ) {
            movieServices.getAll(query.get('page')).then(({data}) => setMoviesValue(data.results))
        } else if (moviesTrigger === 'top rated') {
            movieServices.getTopRated(query.get('page')).then(({data}) => setMoviesValue(data.results))
        } else if (moviesTrigger === 'now playing') {
            movieServices.getNew(query.get('page')).then(({data}) => setMoviesValue(data.results))

        } else if (moviesTrigger === 'genre') {
            movieServices.getByGenre(query.get('page'), genreId).then(({data}) => setMoviesValue(data.results))
        } else if (moviesTrigger === 'query') {
            setMoviesValue(movieByQuery)
        }
    }, [query, moviesTrigger, genreId, movieByQuery])


    return (
        <div>
            {status && <h1>{status}</h1>}
            {moviesValue && moviesValue.length === 0 && <h1>Movie not found</h1>}
            {moviesTrigger !== 'query' ? <Pagination setQuery={setQuery} query={query}/> : ''}
            <div className={classes.poster_card}>
                {moviesValue ? moviesValue.map(movie => <Movie key={movie.id} movie={movie}/>) : <Loader/>}
            </div>
            {moviesTrigger !== 'query' ? <Pagination setQuery={setQuery} query={query}/> : ''}
        </div>
    );
};

export default Movies;