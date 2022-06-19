import React, {useEffect, useState} from 'react';
import {Pagination} from "../pagination/pagination";
import {useSearchParams} from "react-router-dom";

import {actorsService} from "../../services/actors.service";
import {Actor} from "../actor/actor";
import classes from "./actors.module.css";
import {Loader} from "../../UI";
import {useSelector} from "react-redux";


const Actors = () => {

    const {actorsByQuery,status} = useSelector(state => state.actors);
    const [actors, setActors] = useState();
    const [pagination,setPagination] = useState('');
    const [query, setQuery] = useSearchParams({page: '1'});

    useEffect(() => {
        if (actorsByQuery) {
            setActors(actorsByQuery.filter(actor => actor.profile_path));
            setPagination('');
        }
    }, [actorsByQuery])

    useEffect(() => {
        actorsService.getAll(query.get('page')).then(({data}) => setActors(data.results.filter(actor => actor.profile_path)))
        setPagination('yes')
    }, [query])

    return (
        <div>
            {status && <h1>{status}</h1>}
            {actors && actors.length === 0 && <h1>Actor not found</h1> }
            <div className={classes.desktop}> {pagination &&
                <Pagination setQuery={setQuery} query={query} numberPages={10}/>}
            </div>
            <div className={classes.mobile}> {pagination &&
                <Pagination setQuery={setQuery} query={query} numberPages={5}/> }
            </div>

            <div>
                <div className={classes.cards}>
                    {actors ? actors.map(actor => <Actor key={actor.id} actor={actor}/>) : <Loader/>}
                </div>
            </div>
            <div className={classes.desktop}>{pagination &&
                <Pagination setQuery={setQuery} query={query} numberPages={10}/> }
            </div>
            <div className={classes.mobile}>{pagination &&
                <Pagination setQuery={setQuery} query={query} numberPages={5}/>}
            </div>
        </div>
    );
};

export {Actors};