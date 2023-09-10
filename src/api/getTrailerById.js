import fetchEndPoint from './fetchEndPoint.js'

const trailerByIdEndPoint = 'https://api.themoviedb.org/3/movie/'

export const getTrailerById = async (movieId = '569094') => {
    try {
        const videos = await fetchEndPoint(trailerByIdEndPoint + movieId + '/videos?language=en-US');
        return formatTrailer(videos);
    } catch (error) {
        return null;
    }
}

const formatTrailer = (videos) => {
    if (!videos) {
        return null;
    }

    // console.log(videos);

    const trailer = videos.results.find(video => video.type === 'Trailer');
    // console.log(trailer);
    
    if (!trailer) {
        return null;
    }

    return {
        key: trailer.key,
        name: trailer.name,
        url: `https://www.youtube.com/watch?v=${trailer.key}`
    }
}

export default getTrailerById;