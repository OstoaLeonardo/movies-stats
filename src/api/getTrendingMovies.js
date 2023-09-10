import fetchEndPoint from './fetchEndPoint.js'

const trendingMoviesEndPoint = 'https://api.themoviedb.org/3/trending/movie/week?language=en-US'

export const getTrendingMovies = async () => {
    try {
        const movies = await fetchEndPoint(trendingMoviesEndPoint);
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

export default getTrendingMovies;