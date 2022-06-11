import React, {useRef} from 'react';
import {useDispatch} from "react-redux";
import { useNavigate} from "react-router-dom";

import {moviesAction} from "../../Redax";


const MovieForm = () => {

    const movieName = useRef();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const search = (e) => {
        e.preventDefault();
        const movie = movieName.current.value;
        dispatch(moviesAction.getByQuery({query: movie}));
        dispatch(moviesAction.changeTrigger({trigger:'query'}));
        movieName.current.value = '';
        navigate("/movies");
    }

    return (
        <form style={{display:'flex',alignItems:'center'}}>
            <input placeholder={'movie name'} ref={movieName}/>
            <button onClick={search}>search</button>
        </form>
    );
};

export {MovieForm};