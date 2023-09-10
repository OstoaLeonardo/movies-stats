import { ActorCard } from './ActorCard'

export function CastCarousel({ cast }) {
    return (
        <div className='w-full flex flex-col gap-4'>
            <h2 className='text-2xl font-bold text-foreground/70 px-12 md:px-40'>
                Cast
            </h2>
            <div className='w-full flex overflow-x-auto scrollbar-hide px-12 md:px-40'>
                <div className='flex flex-row gap-4'>
                    {cast.map((actor, index) => (
                        <ActorCard key={index} actor={actor} />
                    ))}
                </div>
            </div>
        </div>
    )
}
