import fetchEndPoint from './fetchEndPoint.js'

const moviesByActorIdEndPoint = 'https://api.themoviedb.org/3/person/'

export const getMoviesByActorId = async (personId = '30614') => {
    try {
        const movies = await fetchEndPoint(moviesByActorIdEndPoint + personId + '/movie_credits?language=en-US');
        return formatMovies(movies);
    } catch (error) {
        return null;
    }
}

const formatMovies = (movies) => {
    if (!movies) {
        return null;
    }

    const cast = movies.cast;

    if (!cast) {
        return null;
    }

    return cast.map((movie) => {
        return {
            id: movie.id,
            title: movie.title,
            character: movie.character,
            poster: movie.poster_path,
        }
    })
}

export default getMoviesByActorId;