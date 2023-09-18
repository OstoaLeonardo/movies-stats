import { Link } from 'react-router-dom'
import { Card, Image } from '@nextui-org/react'

export function MovieCard({ movie }) {
    return (
        <Link to={`/movie/${movie.id}`} className='py-12 hover:scale-125 hover:shadow-2xl transition-all hover:z-50'>
            <Card className='h-[300px] w-[200px] sm:h-[350px] sm:w-[250px] rounded-md'>
                <Image
                    radius='none'
                    removeWrapper
                    alt='Card movie'
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster}`}
                />
            </Card>
        </Link>
    )
}
