import React from 'react';
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

import classes from "./actor.module.css";
import {actorsActions} from "../../Redax";
import {Loader} from "../../UI";


const Actor = ({actor}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {name,profile_path,id:actorId} = actor;
    const toActor = () => {
        dispatch(actorsActions.getId({id:actorId}));
        navigate(actorId.toString());
    };
    return (
        <div>
            {actor?<div className={classes.card_wrap} onClick={toActor}>
                <div className={classes.poster_card}><img className={classes.poster}
                                                          src={`http://image.tmdb.org/t/p/w200${profile_path}`}
                                                          alt={name}/>
                </div>
                <div>{name}</div>
            </div>:<Loader/>}
        </div>
    );
};

export {Actor};