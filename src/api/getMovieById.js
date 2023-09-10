import fetchEndPoint from './fetchEndPoint.js'

const movieByIdEndPoint = 'https://api.themoviedb.org/3/movie/'

export const getMovieById = async (movieId = '569094') => {
    try {
        const movie = await fetchEndPoint(movieByIdEndPoint + movieId + '?language=en-US');
        return formatMovie(movie);
    } catch (error) {
        return null;
    }
}

const formatMovie = (movie) => {
    if (!movie) {
        return null;
    }

    // console.log(movie);

    return {
        id: movie.id,
        title: movie.title,
        poster: movie.poster_path,
        overview: movie.overview,
        runtime: movie.runtime,
        releaseDate: movie.release_date,
        voteAverage: movie.vote_average,
        voteCount: movie.vote_count,
        genres: movie.genres,
    }
}

export default getMovieById;