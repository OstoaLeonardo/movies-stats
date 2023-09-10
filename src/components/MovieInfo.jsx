import { Button, Chip, CircularProgress, Image } from '@nextui-org/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

export function MovieInfo({ movie, trailer }) {
    return (
        <>
            <div className='absolute top-0 w-full flex flex-col bg-black/50 px-12 xl:px-40 z-20'>
                <div className='h-screen flex flex-col items-start justify-center gap-4'>
                    <h1 className='text-5xl md:text-6xl font-bold text-white'>
                        {movie.title}
                    </h1>
                    <p className='hidden sm:flex text-base lg:text-2xl font-medium text-white/90'>
                        {movie.overview}
                    </p>
                    <div className='flex flex-wrap mt-4 gap-1 sm:gap-4'>
                        <Chip variant='flat'>
                            {movie.releaseDate}
                        </Chip>
                        <Chip variant='flat'>
                            {movie.runtime} min
                        </Chip>
                        {movie.genres?.map((genre, index) => (
                            <Chip key={index} variant='flat'>
                                {genre.name}
                            </Chip>
                        ))}
                    </div>
                    <div className='flex mt-4 items-center gap-4'>
                        <CircularProgress
                            size='lg'
                            color={
                                movie.voteAverage > 8
                                    ? 'success'
                                    : movie.voteAverage > 6
                                        ? 'warning'
                                        : 'danger'
                            }
                            showValueLabel={true}
                            defaultValue={0}
                            value={movie.voteAverage * 10}
                        />
                        <span className='text-xl md:text-2xl font-semibold text-white/90'>
                            Vote average
                        </span>
                    </div>
                    <Button
                        color='danger'
                        className='mt-4'
                        startContent={<FontAwesomeIcon icon={faPlay} />}
                        onPress={() => window.open(trailer.url, '_blank')}
                    >
                        Play trailer
                    </Button>
                </div>
            </div>
            <Image
                src={`https://image.tmdb.org/t/p/original${movie.poster}`}
                alt='poster'
                radius='none'
                className='w-screen h-screen object-cover'
            />
        </>
    )
}
