import { Card, CardHeader, Image } from '@nextui-org/react'
import { Link } from 'react-router-dom'

export function ActorCard({ actor }) {
    return (
        <Link to={`/cast/${actor.id}`} className='py-12 hover:scale-125 hover:shadow-2xl transition-all hover:z-40'>
            <Card className='h-[300px] w-[200px] sm:h-[350px] sm:w-[250px] rounded-md'>
                <CardHeader className='absolute z-10 top-0 flex-col items-start p-0'>
                    <div className='w-full flex flex-col p-3 mb-6'>
                        <p className='text-tiny text-foreground-700 uppercase font-bold'>
                            {actor.name}
                        </p>
                        <h4 className='text-foreground-900 font-bold'>
                            {actor.character}
                        </h4>
                    </div>
                    <div className='absolute -z-10 top-0 w-full h-full bg-gradient-to-b from-black/60 to-transparent' />
                </CardHeader>
                <Image
                    radius='none'
                    removeWrapper
                    alt='Card actor'
                    className='z-0'
                    src={`https://image.tmdb.org/t/p/w500${actor.image}`}
                />
            </Card>
        </Link>
    )
}
