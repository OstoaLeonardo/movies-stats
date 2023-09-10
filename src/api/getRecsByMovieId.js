import fetchEndPoint from './fetchEndPoint.js'

const recsByMovieIdEndPoint = 'https://api.themoviedb.org/3/movie/'

export const getRecsByMovieId = async (movieId = '30614') => {
    try {
        const movies = await fetchEndPoint(recsByMovieIdEndPoint + movieId + '/recommendations?language=en-US&page=1');
        return formatMovies(movies);
    } catch (error) {
        return null;
    }
}

const formatMovies = (movies) => {
    if (!movies) {
        return null;
    }

    const recs = movies.results;

    if (!recs) {
        return null;
    }

    return recs.map((movie) => {
        return {
            id: movie.id,
            title: movie.title,
            poster: movie.poster_path,
        }
    })
}

export default getRecsByMovieId;