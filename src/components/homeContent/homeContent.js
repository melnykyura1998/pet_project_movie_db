import React, {useState} from 'react';
import { useNavigate} from "react-router-dom";

import classes from "./homeContent.module.css";
import {ArrowBackIosIcon,ArrowForwardIosIcon} from '../../UI/index';

const HomeContent = ({trends}) => {
    const [counter, setCounter] = useState(0);
    const navigate = useNavigate();

    const dec = () => {
        if (counter !== trends.length-1) {
            setCounter(+counter + 1);
        } else {
            setCounter(0);
        }
    };

    const inc = () => {
        if (counter !== 0) {
            setCounter(+counter - 1);
        } else {
            setCounter(trends.length-1);
        }
    }

    const {backdrop_path, original_title, id:movieId} = trends[counter];
    console.log(trends[counter])

    const toMovie=()=>{
        navigate(`/movies/${movieId}`)
    }

    return (
        <div>
            <div className={classes.wrapper}>
                <div><h1>TRENDING NOW</h1>
                    <div className={classes.home_wrapper}>
                        <ArrowBackIosIcon fontSize={'large'} onClick={dec}/>
                        <div className={classes.img_wrapper}>
                            <img onClick={toMovie} className={classes.img} src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
                                 alt={original_title}/>
                            <div className={classes.title}>{original_title}</div>
                        </div>
                        <ArrowForwardIosIcon fontSize={'large'} onClick={inc}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export {HomeContent};