import React, {useEffect, useState} from 'react';

import {HomeService} from "../../services/home.service";
import {HomeContent} from "../../components/homeContent/homeContent";
import {Loader} from "../../UI";
import {HomeContentSwipe} from "../../components/homeContent/homeContentSwipe";
import classes from "./homePage.module.css";

const HomePage = () => {
    const [trends,setTrends] = useState();

    useEffect(()=>{
       if(!trends) {
            HomeService.getTrending().then(({data}) => setTrends(data.results.filter(item => item.backdrop_path)));
        }
    },[trends])

    return (
        <div className={'page_wrapper'}>
            <div className={classes.desktop} >{trends ? < HomeContent trends={trends}/> : <Loader/>}</div>
            <div className={classes.mobile}>{trends ? < HomeContentSwipe trends={trends}/> : <Loader/>}</div>
        </div>
    );
};

export {HomePage};