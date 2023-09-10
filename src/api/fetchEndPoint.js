const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NzY4ODgzZDNjMjBlZWM3MTVhYTJlNTY2NjJiZDY5NyIsInN1YiI6IjY0ZjUyMTA2OTdhNGU2MjU5YmQ0NWNkOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8Wa0w_0fdk2B-BuknVKH-g57i95rAWad12kiCSxp8kI'

const fetchEndPoint = async (endPoint) => {
    const response = await fetch(endPoint, {
        headers: {
            Authorization: 'Bearer ' + accessToken,
        },
    });

    if (response.status === 204 || response.status > 400) {
        return null;
    }

    const data = response.json();
    return data;
}

export default fetchEndPoint;
