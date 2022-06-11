import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";

import {actorsService} from "../../services/actors.service";
import {SingleActor} from "../../components/singleActor/singleActor";
import {Loader} from "../../UI";

const SingleActorPage = () => {

    const {actorId} = useSelector(state => state.actors);
    const [actor,setActor] = useState();

    useEffect(()=>{
        if(actorId){
            actorsService.getById(actorId).then(({data})=>setActor(data));
        }
    },[actorId])
    return (
        <div>
            {actor?<SingleActor actor={actor}/>:<Loader/>}
        </div>
    );
};

export {SingleActorPage};