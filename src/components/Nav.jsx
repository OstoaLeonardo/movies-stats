import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, NavbarBrand, NavbarContent, Input } from '@nextui-org/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClapperboard, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export function Nav() {
    const [valueSearch, setValueSearch] = useState('');

    return (
        <Navbar
            maxWidth='xl'
            height={'6rem'}
            isBlurred={false}
            className='fixed bg-transparentn'
        >
            <NavbarContent>
                <Link to='/'>
                    <NavbarBrand>
                        <FontAwesomeIcon
                            icon={faClapperboard}
                            className='w-auto h-5 sm:h-7 text-[#f31260] mr-3' />
                        <p className='text-xl font-semibold text-inherit'>Movies Stats</p>
                    </NavbarBrand>
                </Link>
            </NavbarContent>

            <NavbarContent as='div' justify='end'>
                <Input
                    classNames={{
                        base: 'max-w-full sm:max-w-[13rem] h-10',
                        mainWrapper: 'h-full',
                        input: 'text-small',
                        inputWrapper: 'h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20',
                    }}
                    size='sm'
                    type='search'
                    placeholder='Search for a movie...'
                    startContent={<FontAwesomeIcon icon={faMagnifyingGlass} />}
                    value={valueSearch}
                    onValueChange={setValueSearch}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            window.location.href = `/search/${valueSearch}`
                        }
                    }}
                />
            </NavbarContent>
        </Navbar>
    )
}
