import {Genre} from "./genresList";
import {MovieCast} from "./movieCast";
import classes from "./castCard.module.css";
import {Rate} from "./rate";

const MovieDetail = ({movieDetail}) => {

    const {title, vote_average, overview, genre_ids, poster_path, id} = movieDetail;

    return (
        <div>
            <div className={classes.movieDetail_wrap}>
                <div>
                    <h2>{title}</h2>
                    <img src={`http://image.tmdb.org/t/p/w300${poster_path}`} alt={title}/>
                </div>
                <div style={{marginLeft: '30px'}}>
                    <div>
                        {genre_ids ? <Genre genre_ids={genre_ids}/> : ''}
                    </div>
                    <div><b>IMDB:</b> {vote_average}</div>
                    <div>{overview}</div>
                    <Rate/>
                </div>
            </div>
            <div>
                <h3>Cast</h3>
                <MovieCast movieId={id}/>
            </div>
        </div>
    );
};

export {MovieDetail};