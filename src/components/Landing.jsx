import { useEffect, useState } from 'react'
import { Button, Image } from '@nextui-org/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import getNowPlayingMovies from '../api/getNowPlayingMovies'
import getTrailerById from '../api/getTrailerById'

export function Landing() {
    const [nowPlaying, setNowPlaying] = useState([])
    const [trailer, setTrailer] = useState([])

    useEffect(() => {
        fetchData()

        const interval = setInterval(() => {
            fetchData()
        }, 25000)

        return () => clearInterval(interval)
    }, [])

    const fetchData = async () => {
        const nowPlaying = await getNowPlayingMovies()
        
        const randomMovie = nowPlaying[Math.floor(Math.random() * nowPlaying.length)]
        const trailer = await getTrailerById(randomMovie.id)

        setNowPlaying(randomMovie)
        setTrailer(trailer)
    }

    return (
        <>
            <div className='absolute top-0 w-full flex flex-col bg-black/50 px-12 md:px-40 z-20'>
                <div className='h-screen flex flex-col items-start justify-center gap-4'>
                    <h1 className='text-3xl md:text-4xl font-bold text-foreground/70'>
                        Latest releases
                    </h1>
                    <h1 className='text-5xl md:text-6xl font-bold text-foreground'>
                        {nowPlaying.title}
                    </h1>
                    <Button
                        color='danger'
                        className='mt-8'
                        startContent={<FontAwesomeIcon icon={faPlay} />}
                        onPress={() => window.open(trailer.url, '_blank')}
                    >
                        Play trailer
                    </Button>
                </div>
            </div>
            <Image
                src={`https://image.tmdb.org/t/p/original${nowPlaying.poster}`}
                alt='poster'
                radius='none'
                className='w-screen h-screen object-cover'
            />
        </>
    )
}
