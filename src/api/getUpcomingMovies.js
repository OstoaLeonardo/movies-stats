import fetchEndPoint from './fetchEndPoint.js'

const upcomingMoviesEndPoint = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1'

export const getUpcomingMovies = async () => {
    try {
        const movies = await fetchEndPoint(upcomingMoviesEndPoint);
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

export default getUpcomingMovies;