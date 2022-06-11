import React from 'react';
import {useSelector} from "react-redux";

import { NavLink, Outlet, useLocation} from "react-router-dom";
import logo from "../UI/img/logo2.png"
import classes from "./mainLayaut.module.css";
import {Meny, MovieForm,ActorForm} from "../components";


const MainLayaut = () => {
    const {pathname} = useLocation();
    const {login} = useSelector(state=>state.movies);
    return (
        <div >
            <div className={classes.header}>
                <img src={logo} alt="logo"/>
                <Meny/>
                 <div className={classes.form}>{pathname.includes('actor')?<ActorForm/>:<MovieForm/>}</div>
                <NavLink className={classes.user} to = {'login'}  >{!login? 'Login' : 'Logout'}</NavLink>
            </div>
            <Outlet/>
        </div>
    );
};

export {MainLayaut};