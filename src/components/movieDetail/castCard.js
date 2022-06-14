import React from 'react';
// import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom"

import classes from "./castCard.module.css";


const CastCard = ({actor:{id:actorId,profile_path,name}}) => {

    const navigate = useNavigate();
    const toActor = ()=>{
        navigate(`/actors/${actorId}`);
    }

    return (
        <div className={classes.card} onClick={toActor}>
            <img className={classes.card_img} src={`http://image.tmdb.org/t/p/w200${profile_path}`} alt={name}/>
            <div>{name}</div>
        </div>
    );
};

export {CastCard};