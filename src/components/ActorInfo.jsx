import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Accordion, AccordionItem, Chip, Image, ScrollShadow } from '@nextui-org/react'
import getActorById from '../api/getActorById'

export function ActorInfo({ }) {
    const [actor, setActor] = useState({})
    const { id } = useParams()

    useEffect(() => {
        fetchActor()
    }, [])

    const fetchActor = async () => {
        const res = await getActorById(id)
        setActor(res)
    }

    return (
        <>
            <div className='absolute top-0 w-full flex flex-col bg-black/50 backdrop-blur-3xl px-12 md:px-40 z-20'>
                <div className='h-screen flex flex-col items-start justify-center gap-4'>
                    <div className='w-full flex flex-col gap-6 md:gap-8'>
                        <div className='flex flex-row gap-6 md:gap-8'>
                            <Image
                                radius='none'
                                removeWrapper
                                alt='Card actor'
                                className='w-16 h-16 md:w-36 md:h-36 rounded-full object-cover aspect-square'
                                src={`https://image.tmdb.org/t/p/w500${actor.image}`}
                            />
                            <div className='flex flex-col gap-4'>
                                <h1 className='text-4xl md:text-6xl font-bold text-foreground'>
                                    {actor.name}
                                </h1>
                                <div className='flex flex-col sm:flex-row gap-1 md:gap-4'>
                                    <div className='flex items-center gap-2'>
                                        <span className='text-white font-semibold'>Gender:</span>
                                        <Chip variant='flat'>
                                            {actor.gender === 1
                                                ? 'Female'
                                                : 'Male'
                                            }
                                        </Chip>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <span className='text-white font-semibold'>Birthday:</span>
                                        <Chip variant='flat'>
                                            {actor.birthday}
                                        </Chip>
                                    </div>
                                    {actor.deathday && (
                                        <div className='flex items-center gap-2'>
                                            <span className='text-white font-semibold'>Deathday:</span>
                                            <Chip variant='flat'>
                                                {actor.deathday}
                                            </Chip>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <Accordion defaultExpandedKeys={['1']} variant='bordered' itemClasses={{ title: 'font-semibold' }}>
                            <AccordionItem key='1' title='Biography'>
                                <ScrollShadow hideScrollBar className='max-h-[200px]'>
                                    {actor.biography}
                                </ScrollShadow>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </div>
            <Image
                alt='poster'
                radius='none'
                className='w-screen h-screen object-cover'
                src={`https://image.tmdb.org/t/p/original${actor.image}`}
            />
        </>
    )
}
