import React, { useState } from 'react'

import { NavLink } from 'react-router-dom'

function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className='border-b-4 border-themeColor md:flex shadow-md shadow-gray-700 md:pb-2 md:pt-2 justify-between bg-slate-900 text-white'>
            <div className="md:container mx-auto md:flex 
            justify-between items-center">
                <div className="flex justify-between">
                    <NavLink to={'/'}><h1 className='font-thin text-2xl m-3 md:m-0'><span className='bg-gradient-to-r from-indigo-600 via-blue-800 to-pink-700 text-white px-3 rounded-xl py-1 font-semibold'>Hasibul</span>Islam</h1></NavLink>
                    {isOpen ? <svg onClick={handleToggle} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-themeColor size-9 mr-6 mt-3 md:hidden">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                    </svg> : <svg onClick={handleToggle} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-9 mr-6 mt-3 md:hidden">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                    </svg>}
                </div>

                <ul className={`transition-opacity md:flex md:opacity-100 text-center ${isOpen ? 'opacity-100 flex' : 'opacity-0 hidden'} md:flex-row flex-col  gap-4`}>
                    <NavLink onClick={handleToggle} className={'py-2 hover:bg-themeColor hover:text-white transition-colors'} to={'/'}>Home</NavLink>
                    <NavLink onClick={handleToggle} className={'py-2 hover:bg-themeColor hover:text-white transition-colors'} to={'/about'}>About</NavLink>
                    <NavLink onClick={handleToggle} className={'py-2 hover:bg-themeColor hover:text-white transition-colors'} to={'/blogs'}>Blogs</NavLink>
                </ul>

            </div>

        </div>
    )
}

export default Navbar