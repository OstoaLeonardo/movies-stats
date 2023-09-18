import { ActorCard } from './ActorCard'

export function CastCarousel({ cast }) {
    return (
        <div className='w-full flex flex-col'>
            <h2 className='text-2xl font-bold text-foreground/70 px-12 md:px-40'>
                Cast
            </h2>
            <div className='flex flex-row gap-4 overflow-x-scroll overflow-y-hidden scrollbar-hide px-12 md:px-40'>
                {cast.map((actor, index) => (
                    <ActorCard key={index} actor={actor} />
                ))}
            </div>
        </div>
    )
}
