import React, {useRef} from 'react';
import {useDispatch} from "react-redux";
import { useNavigate} from "react-router-dom";

import {actorsActions} from "../../Redax/index";

const ActorForm = () => {
    const actorName = useRef();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const search = (e) => {
        e.preventDefault();
        const actor = actorName.current.value;
        dispatch(actorsActions.GetByQuery({page:'1',query: actor}));
        actorName.current.value = '';
        navigate("/actors");

    }
    return (
        <form style={{display:'flex',alignItems:'center'}}>
            <input placeholder={'actor name'} ref={actorName}/>
            <button onClick={search}>search</button>
        </form>
    );
};

export {ActorForm};