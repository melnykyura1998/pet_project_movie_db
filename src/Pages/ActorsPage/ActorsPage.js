import React from 'react';
import {Outlet, useLocation} from "react-router-dom";


import {Actors} from "../../components";


const ActorsPage = () => {
 const {pathname} = useLocation();

    return (
        <div className={'page_wrapper'}>
            {pathname === '/actors'? <Actors/> : <Outlet/>}
        </div>
    );
};

export {ActorsPage};