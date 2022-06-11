import React, {useState} from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";

import {moviesAction} from "../../Redax";
import classes from "./meny.module.css";
import {MenyGenres} from "./meny_genres";


const Meny = () => {
    const [value, setValue] = useState('');
    const [genres, setGenres] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submitMovie = (trigger)=>{
        dispatch(moviesAction.changeTrigger(trigger));
        navigate('/movies');
    }

    return (
        <div className={classes.menu} onMouseLeave={() => {
            setGenres('');
            setValue('');}}>
            <NavLink to={'home'}>Home</NavLink>
            <NavLink to={'actors'}>Actors</NavLink>
            <NavLink to={'movies'} onMouseMove={() => setValue('yes')}>Movies</NavLink>
            <div >
                {value && <ul className={classes.genres}>
                    <li onClick={()=> {submitMovie({trigger:'top rated'})}}><b>Top Rated</b></li>
                    <li onClick={()=>submitMovie({trigger:'popular'})}><b>Popular</b></li>
                    <li onClick={()=>submitMovie({trigger:'now playing'})}><b>Now Playing</b></li>
                    <li onMouseMove={() => setGenres('yes')}><b>Genres</b></li>
                    {genres && <div className={classes.genres_item} onMouseLeave={() => setGenres('')}><MenyGenres submitMovie={submitMovie} /></div>}
                </ul>}
            </div>
        </div>
    );
};

export {Meny};