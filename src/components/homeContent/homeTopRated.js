import React from 'react';
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import classes from "./homeContent.module.css";
import {ArrowBackIosIcon, ArrowForwardIosIcon} from "../../UI";

const HomeTopRated = ({topRated}) => {

    const [counter, setCounter] = useState(0)
    const navigate = useNavigate();

    const dec = () => {
        if (counter !== topRated.length-1) {
            setCounter(+counter + 1);
        } else {
            setCounter(0);
        }
    };

    const inc = () => {
        if (counter !== 0) {
            setCounter(+counter - 1);
        } else {
            setCounter(topRated.length-1);
        }
    }

    const {backdrop_path, original_title, id:movieId} = topRated[counter];


    const toMovie=()=>{
        navigate(`/movies/${movieId}`)
    }

    return (

        <div className={classes.wrapper}>
            <h1>HIGHEST RATING</h1>
            <div className={classes.home_wrapper}>
                <ArrowBackIosIcon fontSize={'large'} onClick={dec}/>
                <div onClick={toMovie} className={classes.img_wrapper}>
                    <img  className={classes.img} src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
                          alt={original_title}/>
                    <div className={classes.title}>{original_title}</div>
                </div>
                <ArrowForwardIosIcon fontSize={'large'} onClick={inc}/>
            </div>
        </div>
    );
};

export {HomeTopRated};