import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

import classes from "./logine.module.css";
import {Movie} from "../movie/movie";

const MyList = () => {

    const navigate = useNavigate();
    const {myList} = useSelector(state => state.movies);
    const [myMovies,setMyMovies] = useState('');

    useEffect(()=>{
        if(myList.length>0){
            setMyMovies(myList)}
    },[myList])

    const setLogout = () => {
        localStorage.removeItem('login');
        navigate('/home');
    };
    return (
        <div>
            <div className={classes.btn_LogOut}>
                <button  onClick={setLogout}> Logout</button>
            </div>
            <div className={classes.myList}>
                <h1>My List</h1>
                <button style={{margin: '0'}} onClick={() => navigate('/movies')}>add</button>
            </div>
            <div className={classes.myListWrap}>{myMovies && myMovies.map(movie => <Movie key={movie.id} movie={movie}/>)}</div>
        </div>
    );
};

export {MyList};