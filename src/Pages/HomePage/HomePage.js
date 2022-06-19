import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {HomeService} from "../../services/home.service";
import {HomeTrends, HomeTrendsSwipe, HomeTopRated, HomeTopRatedSwipe} from "../../components/index";
import {Loader} from "../../UI";
import classes from "./homePage.module.css";
import {moviesAction} from "../../Redax";


const HomePage = () => {

    const [trends, setTrends] = useState(null);
    const {topRated} = useSelector(state => state.movies);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!trends) {
            HomeService.getTrending().then(({data}) => setTrends(data.results.filter(item => item.backdrop_path)));
        }
        if (!topRated) {
            dispatch(moviesAction.getTopRated({page: '1'}))
        }
    }, [])

    return (
        <div className={'page_wrapper'}>
            <div className={classes.desktop}>{trends ? < HomeTrends trends={trends}/> : <Loader/>}</div>
            <div className={classes.mobile}>{trends ? < HomeTrendsSwipe trends={trends}/> : <Loader/>}</div>
            <div className={classes.desktop}>{topRated ? < HomeTopRated topRated={topRated}/> : <Loader/>}</div>
            <div className={classes.mobile}>{topRated ? < HomeTopRatedSwipe topRated={topRated}/> : <Loader/>}</div>

        </div>
    );
};

export {HomePage};