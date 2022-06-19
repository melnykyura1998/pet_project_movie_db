import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";

import classes from "./logine.module.css";
import {MyList} from "./myList";

const Login = () => {

    const [valueName, setValueName] = useState('');
    const [valuePassword, setValuePassword] = useState('');
    const {state} = useLocation();
    const navigate = useNavigate();
    const [login, setLogin] = useState();
    const loginLocStor = localStorage.getItem('login')


    useEffect(() => {
        if (loginLocStor) {
            setLogin(loginLocStor)
        }
    }, [])

    const Logination = () => {
        localStorage.setItem('login', valueName)
        setLogin(localStorage.getItem('login'))
        if (state) {
            navigate(`${state}`);
        }
    }
    return (
        <div >
            {login ? <MyList/> :
                <div className={classes.formWrapper}>
                    <div><input type="text" value={valueName} onChange={(e) => setValueName(e.target.value)}
                                placeholder={'name'}/></div>
                    <div><input type="text" value={valuePassword} onChange={(e) => setValuePassword(e.target.value)}
                                placeholder={'password'}/></div>
                    {valueName && valuePassword && <button onClick={Logination}> Login</button>}
                </div>}
        </div>
    );
};

export {Login};