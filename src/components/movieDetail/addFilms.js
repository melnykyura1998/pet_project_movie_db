import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useLocation, useNavigate} from "react-router-dom";

import {moviesAction} from "../../Redax";

const AddFilms = ({movieDetail}) => {

    const {myList} = useSelector(state => state.movies);
    const dispatch = useDispatch();
    const {pathname} = useLocation();
    const navigate = useNavigate();

    const addMovie = () => {
        if(!localStorage.getItem('login')){
            navigate("/login",{state:pathname});
        }else  {
            dispatch(moviesAction.MyList({movie: movieDetail}));
            let myMovie=[...myList.filter(item=>item.id !==movieDetail.id ), movieDetail];
            localStorage.setItem('myMovies', JSON.stringify( myMovie));
        }}

    return (
        <div>
            <button  style={{width:'110px'}} onClick={addMovie}> Add to my list</button>
        </div>
    );
};

export {AddFilms};