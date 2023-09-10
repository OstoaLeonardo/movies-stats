import fetchEndPoint from './fetchEndPoint.js'

const castByIdEndPoint = 'https://api.themoviedb.org/3/movie/'

export const getCastById = async (movieId = '569094') => {
    try {
        const credits = await fetchEndPoint(castByIdEndPoint + movieId + '/credits?language=en-US');
        return formatCredits(credits);
    } catch (error) {
        return null;
    }
}

const formatCredits = (credits) => {
    if (!credits) {
        return null;
    }
    
    const cast = credits.cast;

    if (!cast) {
        return null;
    }

    return cast.map(actor => {
        return {
            id: actor.id,
            name: actor.name,
            character: actor.character,
            image: actor.profile_path,
        }
    })
}

export default getCastById;