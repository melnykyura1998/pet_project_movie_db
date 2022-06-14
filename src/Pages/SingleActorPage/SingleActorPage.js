import React, {useEffect, useState} from 'react';


import {actorsService} from "../../services/actors.service";
import {SingleActor} from "../../components/singleActor/singleActor";
import {Loader} from "../../UI";
import {useParams} from "react-router-dom";

const SingleActorPage = () => {

    const [actor,setActor] = useState();
    const {actorId} = useParams();
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