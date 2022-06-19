import React from 'react';

import {useLocation, useNavigate} from "react-router-dom";


const Rate = () => {

    const {pathname} = useLocation();
    const navigate = useNavigate();
    let rates=[];

    for(let i =1;i<11;i++){
        rates.push(i)
    }

    const evaluate = ()=>{
        if(!localStorage.getItem('login')){
            navigate("/login",{state:pathname});
        }}

    return (
        <div>
            <button onClick={evaluate}>Rate</button>
            {localStorage.getItem('login') && <select>{rates.map(rate=> <option key={rate}>{rate}</option>)}</select>}
        </div>
    );
};

export {Rate};

