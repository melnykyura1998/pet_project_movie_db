import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Pagination} from "../pagination/pagination";
import {useSearchParams} from "react-router-dom";

import {actorsService} from "../../services/actors.service";
import {Actor} from "../actor/actor";
import classes from "./actors.module.css";
import {Loader} from "../../UI";
import {actorsActions} from "../../Redax";



const Actors = () => {

    const {actorsByQuery,status,pagination} = useSelector(state => state.actors);
    const [actors, setActors] = useState();
    const [query, setQuery] = useSearchParams({page: '1'});
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actorsActions.pagination('no'))
        if (actorsByQuery) {
            setActors(actorsByQuery.filter(actor => actor.profile_path));
        }
    }, [actorsByQuery])

    useEffect(() => {
        actorsService.getAll(query.get('page')).then(({data}) => setActors(data.results.filter(actor => actor.profile_path)))
        dispatch(actorsActions.pagination('yes'))
    }, [query])

    return (
        <div>
            {status && <h1>{status}</h1>}
            {actors && actors.length === 0 && <h1>Actor not found</h1> }
            { pagination ==='yes' && <Pagination setQuery={setQuery} query={query}/>}
            <div className={classes.cards_wrapper}>
                {actors ? actors.map(actor => <Actor key={actor.id} actor={actor}/>) : <Loader/>}
            </div>
            {pagination ==='yes' && <Pagination setQuery={setQuery} query={query}/>}
        </div>
    );
};

export {Actors};