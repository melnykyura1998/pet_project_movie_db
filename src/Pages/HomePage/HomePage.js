import React, {useEffect, useState} from 'react';

import {HomeService} from "../../services/home.service";
import {HomeContent} from "../../components/homeContent/homeContent";
import {Loader} from "../../UI";

const HomePage = () => {
    const [trends,setTrends] = useState();

    useEffect(()=>{
        HomeService.getTrending().then(({data})=>setTrends(data.results));
    },[])

    return (
        <div className={'page_wrapper'}>
            {trends ? < HomeContent trends={trends}/>:<Loader/>}
        </div>
    );
};

export {HomePage};