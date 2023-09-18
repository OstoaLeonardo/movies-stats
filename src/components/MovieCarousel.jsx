import { MovieCard } from './MovieCard'

export function MovieCarousel({ title, movies }) {
    return (
        <div className='w-full flex flex-col'>
            <h2 className='text-2xl font-bold text-foreground/70 px-12 md:px-40'>
                {title}
            </h2>
            <div className='flex flex-row gap-4 overflow-x-scroll overflow-y-hidden scrollbar-hide px-12 md:px-40'>
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    )
}
