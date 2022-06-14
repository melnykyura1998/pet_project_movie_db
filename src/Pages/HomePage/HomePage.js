import React, {useEffect, useState} from 'react';

import {HomeService} from "../../services/home.service";
import {HomeContent} from "../../components/homeContent/homeContent";
import {Loader} from "../../UI";

const HomePage = () => {
    const [trends,setTrends] = useState();

    useEffect(()=>{
       if(!trends) {
            HomeService.getTrending().then(({data}) => setTrends(data.results.slice(0,5).filter(item => item.backdrop_path)));
        }
    },[trends])

    return (
        <div className={'page_wrapper'}>
            {trends ? < HomeContent trends={trends}/>:<Loader/>}
        </div>
    );
};

export {HomePage};