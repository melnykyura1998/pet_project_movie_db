import React from 'react';

import classes from "./singleActor.module.css";
import {FilmsWithActor} from "./filmsWithActor";

const SingleActor = ({actor}) => {

    const {profile_path,name,biography,birthday,place_of_birth,id:actorId} = actor;

    return (
        <div>
            <div className={classes.actor_page}>
                <div><h2>{name}</h2>
                    <img src={`http://image.tmdb.org/t/p/w300${profile_path}`} alt={name}/>
                </div>
                <div>
                    <div style={{marginBottom: '40px'}}>
                        <div><b>birthday: {birthday}</b></div>
                        <div><b>place of birth: {place_of_birth}</b></div>
                    </div>
                    <h3>Biography</h3>
                    <div>{biography}</div>
                </div>
            </div>
            {actorId && <FilmsWithActor actorId={actorId}/>}
        </div>
    );
};
export {SingleActor};