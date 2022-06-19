
import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import {movieServices} from "../../services/movie.services";


const initialState = {
    Allmovies: '',
    movieByQuery: '',
    topRated: null,
    moviesTrigger: 'popular',
    genreId:null,
    myList: JSON.parse(localStorage.getItem('myMovies'))||[],
    status:null,
    byGenre:null,
    nowPlaying:null
}

const getAllMovies = createAsyncThunk(
    'moviesSlice/getAllMovies',
    async ({page}) => {
        const {data} = await movieServices.getAll(page)
        return data
    }
);
const getNew = createAsyncThunk(
    'moviesSlice/getNew',
    async ({page}) => {
        const {data} = await movieServices.getNew(page);
        return data;

    }
);
const getTopRated = createAsyncThunk(
    'moviesSlice/getTopRated',
    async ({page}) => {
        const {data} = await movieServices.getTopRated(page);
        return data;
    }
);

const getByQuery = createAsyncThunk(
    'moviesSlice/getByQuery',
    async ({query}) => {
        const {data} = await movieServices.getByQuery(query);
        return data
    }
);
const getByGenre = createAsyncThunk(
    'moviesSlice/getByGenre',
    async ({page,genreId}) => {
        const {data} = await movieServices.getByGenre(page,genreId);
        return data;
    }
);


const moviesSlice = createSlice({
        name: 'moviesSlice',
        initialState,
        reducers: {
            changeTrigger: (state, actions) => {
                const {trigger,genreId}= actions.payload;
                state.moviesTrigger = trigger;
                state.genreId = genreId;
            },
            MyList: (state,actions)=>{
                const {movie} = actions.payload;
                state.myList = [...state.myList.filter(item=>item.id !==movie.id ),movie];
            }
        },
        extraReducers: (builder) => {
            builder

                .addCase(getByQuery.fulfilled, (state, actions) => {
                    const {results} = actions.payload;
                    state.movieByQuery = results.filter(movie => movie.poster_path);
                })
                .addCase(getByQuery.rejected, (state, action) => {
                    const {status} = action.payload;
                    state.status = status;
                })
                .addCase(getTopRated.fulfilled, (state, actions) => {
                    const {results,page} = actions.payload;
                    state.topRated = results;
                    state.previousPage = page;
                })
                .addCase(getAllMovies.fulfilled, (state, actions) => {
                    const {results,page} = actions.payload;
                    state.Allmovies = results;
                    state.previousPage = page;
                })
                .addCase(getNew.fulfilled, (state, actions) => {
                    const {results,page} = actions.payload;
                    state.nowPlaying = results;
                    state.previousPage = page;
                })
                .addCase(getByGenre.fulfilled, (state, actions) => {
                    const {results,page} = actions.payload;
                    state.byGenre = results;
                    state.previousPage = page;
                })
        }
    })
;

const {reducer: moviesReducer, actions:{changeTrigger,MyList}} = moviesSlice;
const moviesAction = {
    getAllMovies,
    getByGenre,
    getNew,
    getTopRated,
    getByQuery,
    changeTrigger,
    MyList
}
export {moviesReducer, moviesAction}