import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useLocation, useNavigate} from "react-router-dom";

import {moviesAction} from "../../Redax";
import classes from "./logine.module.css";

const Login = () => {
    const [valueName, setValueName] = useState('');
    const [valuePassword, setValuePassword] = useState('');
    const {login} = useSelector(state => state.movies);
    const dispatch = useDispatch();
    const {state} = useLocation();
    const navigate = useNavigate();

    const setLogout = () => {
        dispatch(moviesAction.LogIn(''));
        navigate('/home');
    };

    const setLogin = () => {
        dispatch(moviesAction.LogIn({login: valueName}));
        if (state) {
            navigate(`${state}`);
        } else {
            navigate('/home');
        }
    }
    return (
        <div className={classes.wrapper}>
            {login ? <button className={classes.btn_LogOut} onClick={setLogout}> Logout</button> :
                <div>
                    <div><input type="text" value={valueName} onChange={(e) => setValueName(e.target.value)}
                                placeholder={'name'}/></div>
                    <div><input type="text" value={valuePassword} onChange={(e) => setValuePassword(e.target.value)}
                                placeholder={'password'}/></div>
                    {valueName && valuePassword ? <button onClick={setLogin}> Login</button> : ''}
                </div>}
        </div>
    );
};

export {Login};