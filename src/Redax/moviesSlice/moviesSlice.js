import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import {movieServices} from "../../services/movie.services";

const initialState = {
    // movies: [],
    // movieDetailRequest: {},
    // movieByQuery: '',
    // topRated: [],
    moviesTrigger: 'popular',
    genreId:'',
    login:'',
    status:'',
}
const getByQuery = createAsyncThunk(
    'moviesSlice/getByQuery',
    async ({query}) => {
        const {data} = await movieServices.getByQuery(query);
        return data
    }
);

// const getAllMovies = createAsyncThunk(
//     'moviesSlice/getAllMovies',
//     async ({page}) => {
//         const {data} = await movieServices.getAll(page)
//         console.log(data)
//         return data
//     }
// );
// const getMovieById = createAsyncThunk(
//     'moviesSlice/getMovieById',
//     async ({id}) => {
//         const {data} = await movieServices.getById(id);
//         return data;
//
//     }
// )

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
                // .addCase(getAllMovies.fulfilled, (state, actions) => {
                //     const {results, page} = actions.payload;
                //     state.movies = results;
                //     state.page = page;
                // })
                // .addCase(getMovieById.fulfilled, (state, actions) => {
                //     const movieDetail = actions.payload;
                //     state.movieDetail = movieDetail;
                // })
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
    // getAllMovies,
    // getMovieById,
    getByQuery,
    changeTrigger,
    LogIn
}
export {moviesReducer, moviesAction}