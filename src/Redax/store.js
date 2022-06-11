import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {moviesReducer} from "./moviesSlice/moviesSlice";
import {actorsReduser} from "./actorsSlice/actorsSlice";

const rootReducer = combineReducers({
    movies:moviesReducer,
    actors:actorsReduser,
});
export const store = configureStore({
    reducer:rootReducer,
});