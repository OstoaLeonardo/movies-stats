import { MovieCard } from './MovieCard'

export function MovieCarousel({ title, movies }) {
    return (
        <div className='w-full flex flex-col gap-4'>
            <h2 className='text-2xl font-bold text-foreground/70 px-12 md:px-40'>
                {title}
            </h2>
            <div className='w-full flex overflow-x-auto scrollbar-hide px-12 md:px-40'>
                <div className='flex flex-row gap-4'>
                    {movies.map((movie, index) => (
                        <MovieCard key={index} movie={movie} />
                    ))}
                </div>
            </div>
        </div>
    )
}
