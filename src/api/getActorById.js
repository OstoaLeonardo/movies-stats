import fetchEndPoint from './fetchEndPoint.js'

const movieByIdEndPoint = 'https://api.themoviedb.org/3/person/'

export const getActorById = async (personId = '30614') => {
    try {
        const person = await fetchEndPoint(movieByIdEndPoint + personId + '?language=en-US');
        return formatActor(person);
    } catch (error) {
        return null;
    }
}

const formatActor = (person) => {
    if (!person) {
        return null;
    }

    // console.log(person);

    return {
        name: person.name,
        biography: person.biography,
        gender: person.gender,
        birthday: person.birthday,
        deathday: person.deathday,
        image: person.profile_path,
    }
}

export default getActorById;