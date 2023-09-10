import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { MovieCard } from '../components/MovieCard'
import getMovieByQuery from '../api/getMovieByQuery'

const Search = () => {
    const [movies, setMovies] = useState([])
    const { query } = useParams()

    useEffect(() => {
        fetchData()

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }, [])

    const fetchData = async () => {
        const movies = await getMovieByQuery(query)
        setMovies(movies)
    }

    return (
        <div className='min-h-screen flex flex-col items-center justify-start pt-20'>
            <div className='w-full flex flex-col px-40 py-16 gap-8'>
                <h1 className='text-3xl font-bold text-white/70'>
                    Search results for: <span className='text-white font-semibold'>{query}</span>
                </h1>
                <div className='grid grid-cols-12 gap-4'>
                    {movies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                    {movies.length === 0 && (
                        <div className='h-60 col-span-full flex items-center justify-center'>
                            <h1 className='text-xl font-semibold text-white/70'>
                                No results found
                            </h1>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Search