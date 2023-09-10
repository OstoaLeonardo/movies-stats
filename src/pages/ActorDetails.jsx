import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ActorInfo } from '../components/ActorInfo'
import { MovieCarousel } from '../components/MovieCarousel'
import getMoviesByActorId from '../api/getMoviesByActorId'

const ActorDetails = () => {
    const [movies, setMovies] = useState([])
    const { id } = useParams()

    useEffect(() => {
        fetchMoviesByActorId()

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }, [])

    const fetchMoviesByActorId = async () => {
        const res = await getMoviesByActorId(id)
        setMovies(res)
    }

    return (
        <div className='h-full flex flex-col items-center justify-center bg-black'>
            <ActorInfo />
            <div className='w-full flex flex-col py-16 gap-16'>
                <MovieCarousel title={'Known for'} movies={movies} />
            </div>
        </div>
    )
}

export default ActorDetails