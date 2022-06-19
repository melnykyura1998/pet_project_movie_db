import React from 'react';
import { NavLink, Outlet, useLocation} from "react-router-dom";

import logo from "../UI/img/logo2.png"
import classes from "./mainLayaut.module.css";
import {Meny, MovieForm,ActorForm} from "../components";


const MainLayaut = () => {

    const {pathname} = useLocation();
    let user= localStorage.getItem('login');

    return (
        <div>
            <div className={classes.desktop}>
                <div className={classes.header}>
                    <img src={logo} alt="logo"/>
                    <Meny/>
                    <div className={classes.form}>{pathname.includes('actor') ? <ActorForm/> : <MovieForm/>}</div>
                    <NavLink to={'login'}>{!user ? 'Login' : user.slice(0,5) }</NavLink>
                </div>
                <Outlet/>
            </div>
            <div className={classes.mobile}>
                <div className={classes.header}>
                    <Meny/>
                    <NavLink to={'login'}>{!user ? 'Login' : user.slice(0,5)}</NavLink>
                    <div className={classes.form_wrapper}>
                        <div className={classes.form}>{pathname.includes('actor') ? <ActorForm/> : <MovieForm/>}</div>
                    </div>
                </div>
                <Outlet/>
            </div>
        </div>
    );
};

export {MainLayaut};