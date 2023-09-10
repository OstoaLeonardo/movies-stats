import fetchEndPoint from './fetchEndPoint.js'

const popularMoviesEndPoint = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1'

export const getPopularMovies = async () => {
    try {
        const movies = await fetchEndPoint(popularMoviesEndPoint);
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

export default getPopularMovies;