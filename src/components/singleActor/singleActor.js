import React from 'react';

import classes from "./singleActor.module.css";

const SingleActor = ({actor}) => {

    const {profile_path,name,biography} = actor;

    return (
        <div className={classes.actor_page}>
            <div><h2>{name}</h2>
                <img src={`http://image.tmdb.org/t/p/w300${profile_path}`} alt={name}/>
            </div>
            <div>
                <h3>Biography</h3>
                <div>{biography}</div>
            </div>

        </div>
    );
};
export {SingleActor};