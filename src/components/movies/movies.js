// import React, {useEffect, useState} from 'react';
// import {useDispatch, useSelector} from "react-redux";
// import {useLocation, useSearchParams} from "react-router-dom";
//
// import {Movie, Pagination} from "../index";
// import classes from "./movies.module.css";
// import {movieServices} from "../../services/movie.services";
// import {Loader} from "../../UI";
// import {moviesAction} from "../../Redax";
//
//
// const Movies = () => {
//
//     const [moviesValue, setMoviesValue] = useState();
//
//     const {Allmovies, moviesTrigger, genreId, movieByQuery, status, previousPage,topRated,nowPlaing,byGenre} = useSelector(state => state.movies);
//     const [query, setQuery] = useSearchParams({page: '1'});
//
//     console.log(moviesValue, previousPage, query.get('page'))
//     const dispatch = useDispatch();
//     console.log(previousPage)
//
//     useEffect(() => {
//         if (moviesTrigger === 'popular' && (!Allmovies || previousPage !== query)) {
//
//             // movieServices.getAll(query.get('page')).then(({data}) => setMoviesValue(data.results))
//             dispatch(moviesAction.getAllMovies({page: query.get('page')}))
//         } else if (moviesTrigger === 'top rated' && (!topRated || previousPage !== query)) {
//             dispatch(moviesAction.getTopRated({page: query.get('page')}))
//             // movieServices.getTopRated(query.get('page')).then(({data}) => setMoviesValue(data.results))
//         } else if (moviesTrigger === 'now playing'&& (!nowPlaing || previousPage !== query)) {
//             // movieServices.getNew(query.get('page')).then(({data}) => setMoviesValue(data.results))
//             dispatch(moviesAction.getNew({page: query.get('page')}))
//
//         } else if (moviesTrigger === 'genre'&& (!byGenre || previousPage !== query)) {
//             // movieServices.getByGenre(query.get('page'), genreId).then(({data}) => setMoviesValue(data.results))
//             dispatch(moviesAction.getByGenre({page: query.get('page'),genreId}))
//         }
//     }, [query, moviesTrigger, genreId ])
//
//
//
//
//
//
//     return (
//         <div>
//             {status && <h1>{status}</h1>}
//             {moviesValue && moviesValue.length === 0 && <h1>Movie not found</h1>}
//             {moviesTrigger !== 'query' ? <Pagination setQuery={setQuery} query={query}/> : ''}
//             <div className={classes.poster_card}>
//                 {moviesValue ? moviesValue.map(movie => <Movie key={movie.id} movie={movie}/>) : <Loader/>}
//             </div>
//             {moviesTrigger !== 'query' ? <Pagination setQuery={setQuery} query={query}/> : ''}
//         </div>
//     );
// };
//
// export default Movies;

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