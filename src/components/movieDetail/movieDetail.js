import {Genre} from "./genresList";
import {MovieCast} from "./movieCast";
import classes from "./castCard.module.css";
import {Rate} from "./rate";
import {Getvideo} from "./getvideo";

const MovieDetail = ({movieDetail}) => {

    const {title, vote_average, overview, genre_ids, poster_path, id,budget,release_date,production_countries} = movieDetail;

    return (
        <div>
            <div className={classes.movieDetail_wrap}>
                <div>
                    <h2>{title}</h2>
                    <img src={`http://image.tmdb.org/t/p/w300${poster_path}`} alt={title}/>
                </div>
                <div style={{marginLeft: '30px'}}>
                     <div><b> budget:</b> {budget}</div>
                    <div><b>releas date:</b>  {release_date}</div>
                    {production_countries.length>0 && <div><b>country:</b> {production_countries[0].name}</div>}
                    <div>
                        {genre_ids ? <Genre genre_ids={genre_ids}/> : ''}
                    </div>
                    <div><b>IMDB:</b> {vote_average}</div>
                    <div>{overview}</div>
                    <Rate/>
                </div>
            </div>
            <div className={classes.video_vrapper}>
                <Getvideo id={id}/>
            </div>
            <div>
                <MovieCast movieId={id}/>
            </div>
        </div>
    );
};

export {MovieDetail};