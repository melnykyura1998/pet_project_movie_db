const baseURL= process.env.REACT_APP_API
export const urls = {
    movie:{
        popular:'/movie/popular',
        movie: '/movie',
        getByQuery:'search/movie',
        topRated:'/movie/top_rated',
        new:'/movie/now_playing',
        genre:'/discover/movie'
    },
    actors: {
        actors:'/person',
        popular:'/person/popular',
        byQuery:'search/person'
    },
    home:{
        home:'/trending/movie/week'
    }
}
export default baseURL