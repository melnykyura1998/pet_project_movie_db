import React from 'react';

import classes from "./loadeer.module.css";

const Loader = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.loader}>
            </div>
        </div>
    );
};

export {Loader};