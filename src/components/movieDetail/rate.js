import React from 'react';

import {useLocation, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

const Rate = () => {

    const {pathname} = useLocation();
    const navigate = useNavigate();
    const {login} = useSelector(state=>state.movies);
    let rates=[];

    for(let i =1;i<11;i++){
        rates.push(i)
    }

    const evaluate = ()=>{
        if(!login){
            navigate("/login",{state:pathname});
        }}

    return (
        <div>
            <button onClick={evaluate}>Rate</button>
            {login && <select>{rates.map(rate=> <option>{rate}</option>)}</select>}
        </div>
    );
};

export {Rate};

