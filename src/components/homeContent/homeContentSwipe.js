import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

import classes from "./homeContent.module.css";


const HomeContentSwipe = ({trends}) => {

    const [counter, setCounter] = useState(0);
    const navigate = useNavigate();
    const [xStart,setXStart] = useState('');

    const touchStart = (e) => {
        setXStart(e.touches[0].clientX)
    }

    const toucheMove = (e) => {
        let xFinish = e.touches[0].clientX
        if ( Math.trunc((xStart-xFinish)) > 100) {
            setXStart(xFinish)
             dec()
        } else if (Math.trunc((xStart-xFinish)) < -100) {
            setXStart(xFinish)
             inc()}
    }

    const dec = () => {
        if (counter !== trends.length - 1) {
            setCounter(+counter + 1);
        } else {
            setCounter(0);
        }
    };

    const inc = () => {
        if (counter !== 0) {
            setCounter(+counter - 1);
        } else {
            setCounter(trends.length - 1);
        }
    }

    const {backdrop_path, original_title, id: movieId} = trends[counter];
    console.log(trends[counter])

    const toMovie = () => {
        navigate(`/movies/${movieId}`)
    }

    return (
        <div className={classes.wrapper}>
            <h1>TRENDING NOW</h1>
            <div className={classes.home_wrapper}>
                <div onClick={toMovie} className={classes.img_wrapper}>
                    <img onTouchStart={touchStart} onTouchMove={toucheMove} className={classes.img}
                         src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
                         alt={original_title}/>
                    <div className={classes.title}>{original_title}</div>
                </div>
            </div>
        </div>
    );
};

export {HomeContentSwipe};