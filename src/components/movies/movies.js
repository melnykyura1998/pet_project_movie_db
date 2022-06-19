
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { useSearchParams} from "react-router-dom";

import {Movie, Pagination} from "../index";
import classes from "./movies.module.css";
import {Loader} from "../../UI";
import {moviesAction} from "../../Redax";



const Movies = () => {

    const [moviesValue, setMoviesValue] = useState();
    const {  Allmovies,moviesTrigger,nowPlaying,byGenre,topRated , genreId, movieByQuery, status} = useSelector(state => state.movies);
    const [query, setQuery] = useSearchParams({page: '1'});
    const dispatch = useDispatch();

    useEffect(() => {
        if ( moviesTrigger === 'popular' ) {
            dispatch(moviesAction.getAllMovies({page: query.get('page')}))
        } else if (moviesTrigger === 'top rated') {
            dispatch(moviesAction.getTopRated({page: query.get('page')}))
        } else if (moviesTrigger === 'now playing') {
            dispatch(moviesAction.getNew({page: query.get('page')}))

        } else if (moviesTrigger === 'genre') {
            dispatch(moviesAction.getByGenre({page: query.get('page'),genreId}))
        } else if (moviesTrigger === 'query') {
            setMoviesValue(movieByQuery)
        }
    }, [query, moviesTrigger, genreId, movieByQuery]);

    useEffect(()=>{
        if(moviesTrigger === 'popular' ){
            setMoviesValue(Allmovies)
        }else if(moviesTrigger === 'top rated'){
            setMoviesValue(topRated)
        }else if(moviesTrigger === 'now playing'){
            setMoviesValue(nowPlaying )
        }else if(moviesTrigger === 'genre'){
            setMoviesValue(byGenre )
        }
    },[Allmovies, topRated ,moviesTrigger,nowPlaying,byGenre]);


    return (
        <div>
            {status && <h1>{status}</h1>}
            {moviesValue && moviesValue.length === 0 && <h1>Movie not found</h1>}
            <div className={classes.desktop}>{moviesTrigger !== 'query' &&
                <Pagination setQuery={setQuery} query={query} numberPages={10}/> }
            </div>
            <div className={classes.mobile}>{moviesTrigger !== 'query' &&
                <Pagination setQuery={setQuery} query={query} numberPages={5}/>  }
            </div>
            <div>
                <div className={classes.movies}>
                    {moviesValue ? moviesValue.map(movie => <Movie key={movie.id} movie={movie}/>) : <Loader/>}
                </div>
            </div>
            <div className={classes.desktop}>{moviesTrigger !== 'query' &&
                <Pagination setQuery={setQuery} query={query} numberPages={10}/> }
            </div>
            <div className={classes.mobile}>{moviesTrigger !== 'query' &&
                <Pagination setQuery={setQuery} query={query} numberPages={5}/>}
            </div>

        </div>
    );
};

export default Movies;