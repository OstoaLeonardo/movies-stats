import { Card, CardHeader, Image } from '@nextui-org/react'
import { Link } from 'react-router-dom'

export function ActorCard({ actor }) {
    return (
        <Link
            to={`/cast/${actor.id}`}
            state={{ actor }}
        >
            <Card className='col-span-12 sm:col-span-2 h-[300px] w-[200px]'>
                <CardHeader className='absolute z-10 top-1 flex-col !items-start'>
                    <p className='text-tiny text-white/60 uppercase font-bold'>
                        {actor.name}
                    </p>
                    <h4 className='text-white font-medium text-large'>
                        {actor.character}
                    </h4>
                </CardHeader>
                <Image
                    radius='sm'
                    removeWrapper
                    alt='Card actor'
                    className='z-0 w-full h-full object-cover'
                    src={`https://image.tmdb.org/t/p/w500${actor.image}`}
                />
            </Card>
        </Link>
    )
}
