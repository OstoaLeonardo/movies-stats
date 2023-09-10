import fetchEndPoint from './fetchEndPoint.js'

const moviesByQueryEndPoint = 'https://api.themoviedb.org/3/search/movie?query='

export const getMovieByQuery = async (query = 'spiderman') => {
    try {
        const concatQuery = query.split(' ').join('%20');
        const movies = await fetchEndPoint(moviesByQueryEndPoint + concatQuery + '&include_adult=false&language=en-US&page=1');
        return formatMovies(movies);
    } catch (error) {
        return null;
    }
}

const formatMovies = (movies) => {
    if (!movies) {
        return null;
    }
    
    const search = movies.results;

    if (!search) {
        return null;
    }

    return search.map((movie) => {
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
    })
}

export default getMovieByQuery;