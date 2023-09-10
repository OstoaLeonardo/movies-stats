import React, { useEffect, useState } from 'react'
import { Landing } from '../components/Landing'
import { MovieCarousel } from '../components/MovieCarousel'
import getPopularMovies from '../api/getPopularMovies'
import getTrendingMovies from '../api/getTrendingMovies'
import getTopRatedMovies from '../api/getTopRatedMovies'
import getUpcomingMovies from '../api/getUpcomingMovies'
import getNowPlayingMovies from '../api/getNowPlayingMovies'

const Home = () => {
    const [popular, setPopular] = useState([])
    const [trending, setTrending] = useState([])
    const [top, setTop] = useState([])
    const [upcoming, setUpcoming] = useState([])
    const [nowPlaying, setNowPlaying] = useState([])

    useEffect(() => {
        fetchData()

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }, [])

    const fetchData = async () => {
        const popular = await getPopularMovies()
        const trending = await getTrendingMovies()
        const top = await getTopRatedMovies()
        const upcoming = await getUpcomingMovies()
        const nowPlaying = await getNowPlayingMovies()

        setPopular(popular)
        setTrending(trending)
        setTop(top)
        setUpcoming(upcoming)
        setNowPlaying(nowPlaying)
    }

    return (
        <div className='h-full flex flex-col items-center justify-center'>
            <Landing />
            <div className='w-full flex flex-col py-16 gap-16'>
                <MovieCarousel title={'Popular'} movies={popular} />
                <MovieCarousel title={'Trending'} movies={trending} />
                <MovieCarousel title={'Top Rated'} movies={top} />
                <MovieCarousel title={'Upcoming'} movies={upcoming} />
                <MovieCarousel title={'Currently in theatres'} movies={nowPlaying} />
            </div>
        </div>
    )
}

export default Home