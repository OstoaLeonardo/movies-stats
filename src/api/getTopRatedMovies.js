import fetchEndPoint from './fetchEndPoint.js'

const topRatedMoviesEndPoint = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1'

export const getTopRatedMovies = async () => {
    try {
        const movies = await fetchEndPoint(topRatedMoviesEndPoint);
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

export default getTopRatedMovies;