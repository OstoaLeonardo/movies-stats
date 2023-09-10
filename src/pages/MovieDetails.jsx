import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { MovieInfo } from '../components/MovieInfo'
import { CastCarousel } from '../components/CastCarousel'
import { MovieCarousel } from '../components/MovieCarousel'
import getMovieById from '../api/getMovieById'
import getTrailerById from '../api/getTrailerById'
import getCastById from '../api/getCastById'
import getRecsByMovieId from '../api/getRecsByMovieId'

const MovieDetails = () => {
    const [movie, setMovie] = useState([])
    const [trailer, setTrailer] = useState([])
    const [cast, setCast] = useState([])
    const [movies, setMovies] = useState([])
    const { id } = useParams()

    useEffect(() => {
        fetchData()

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }, [id])

    const fetchData = async () => {
        const movie = await getMovieById(id)
        const trailer = await getTrailerById(id)
        const cast = await getCastById(id)
        const recs = await getRecsByMovieId(id)

        setMovie(movie)
        setTrailer(trailer)
        setCast(cast)
        setMovies(recs)
    }

    return (
        <div className='h-full flex flex-col items-center justify-center bg-black'>
            <MovieInfo movie={movie} trailer={trailer} />
            <div className='w-full flex flex-col py-16 gap-16'>
                <CastCarousel cast={cast} />
                <MovieCarousel title={'Recommendations'} movies={movies} />
            </div>
        </div>
    )
}

export default MovieDetails