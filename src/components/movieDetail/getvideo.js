import React from 'react';
import {useState} from "react";
import {useEffect} from "react";

import {movieServices} from "../../services/movie.services";
import classes from "./castCard.module.css";



const Getvideo = ({id}) => {
    const [videos,setVideo] = useState([]);
    const [sortedvideos,setSortedVideos] = useState([]);
// .results.filter(item=>item.name==='Official Trailer')
    useEffect(()=>{
        if(id){
            movieServices.getVideo(id).then(({data})=>setVideo(data.results))
        }
    },[id])

    useEffect(()=>{
        if(videos.length>1){
            setSortedVideos(videos.filter(item=>item.name==='Official Trailer'))
        }else{
            setSortedVideos(videos)}
    },[videos])



    return (
        <div className={classes.video_vrapper} >
            {sortedvideos.length>0 && <h3>{sortedvideos[0].name}</h3>}
            {sortedvideos.length>0 && <div className={classes.frame_blc}>
                <iframe src={` https://www.youtube.com/embed/${sortedvideos[0].key}`}
                    width={'1600px'}
                    height={'920px'}
                        title={'video'}/>
            </div> }
        </div>
    );
};

export {Getvideo};

