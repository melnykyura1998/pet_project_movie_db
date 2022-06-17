import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import {movieServices} from "../../services/movie.services";

const initialState = {
    Allmovies: '',
    // movieDetailRequest: {},
    movieByQuery: '',
    byGenre:'',
    topRated: '',
    moviesTrigger: 'popular',
    genreId:'',
    login:'',
    status:'',
    previousPage: '1'
}
const getByQuery = createAsyncThunk(
    'moviesSlice/getByQuery',
    async ({query}) => {
        const {data} = await movieServices.getByQuery(query);
        return data
    }
);

const getAllMovies = createAsyncThunk(
    'moviesSlice/getAllMovies',
    async ({page}) => {
        const {data} = await movieServices.getAll(page)
        console.log(data)
        return data
    }
);
const getTopRated = createAsyncThunk(
    'moviesSlice/getTopRated',
    async ({page}) => {
        const {data} = await movieServices.getTopRated(page);
        return data;

    }
);
const getNew = createAsyncThunk(
    'moviesSlice/getNew',
    async ({page}) => {
        const {data} = await movieServices.getNew(page);
        return data;

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
            LogIn: (state,actions)=>{
                const {login} = actions.payload
                state.login = login;
            }
        },
        extraReducers: (builder) => {
            builder
                .addCase(getAllMovies.fulfilled, (state, actions) => {
                    const {results,page} = actions.payload;
                    state.Allmovies = results;
                    state.previousPage = page;
                    console.log(results)
                })
                .addCase(getTopRated.fulfilled, (state, actions) => {
                    const {results,page} = actions.payload;
                    state.topRated = results;
                    state.previousPage = page;
                    console.log(results)
                })
                .addCase(getNew.fulfilled, (state, actions) => {
                    const {results,page} = actions.payload;
                    state.nowPlaing = results;
                    state.previousPage = page;
                    console.log(results)
                })
                .addCase(getByGenre.fulfilled, (state, actions) => {
                    const {results,page} = actions.payload;
                    state.byGenre = results;
                    state.previousPage = page;
                    console.log(results)
                })
                .addCase(getByQuery.fulfilled, (state, actions) => {
                    const {results} = actions.payload;
                    state.movieByQuery = results.filter(movie => movie.poster_path);
                })
                .addCase(getByQuery.rejected, (state, action) => {
                    const {status} = action.payload;
                    state.status = status
                })
        }
    })
;

const {reducer: moviesReducer, actions:{changeTrigger,LogIn}} = moviesSlice;
const moviesAction = {
    getAllMovies,
    getTopRated,
    getNew,
    getByGenre,
    // getMovieById,
    getByQuery,
    changeTrigger,
    LogIn
}
export {moviesReducer, moviesAction}