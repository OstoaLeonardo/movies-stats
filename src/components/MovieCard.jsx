import { Link } from 'react-router-dom'
import { Card, Image } from '@nextui-org/react'

export function MovieCard({ movie }) {
    return (
        <Link to={`/movie/${movie.id}`} className='col-span-12 sm:col-span-2'>
            <Card className='h-[300px] w-[200px]'>
                <Image
                    radius='sm'
                    removeWrapper
                    alt='Card movie'
                    className='z-0 w-full h-full object-cover'
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster}`}
                />
            </Card>
        </Link>
    )
}
