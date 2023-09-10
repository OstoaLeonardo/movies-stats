import fetchEndPoint from './fetchEndPoint.js'

const nowPlayingMoviesEndPoint = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1'

export const getNowPlayingMovies = async () => {
    try {
        const movies = await fetchEndPoint(nowPlayingMoviesEndPoint);
        return formatMovies(movies);
    } catch (error) {
        return null;
    }
}

const formatMovies = (movies) => {
    if (!movies) {
        return null;
    }

    return movies.results.map((movie) => {
        return {
            id: movie.id,
            title: movie.title,
            poster: movie.poster_path,
        }
    })
}

export default getNowPlayingMovies;