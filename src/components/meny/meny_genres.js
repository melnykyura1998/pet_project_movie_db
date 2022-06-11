import React from 'react';

import {genresList} from "../movieDetail/genresList";


const MenyGenres = ({submitMovie}) => {

    return (
        <div>
            {genresList.map(genre=><li key={genre.id} onClick={()=>submitMovie({trigger:'genre',genreId:genre.id})}>{genre.name}</li>)}
        </div>
    );
};

export {MenyGenres};