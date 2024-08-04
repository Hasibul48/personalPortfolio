import React, { useState } from 'react'

import { NavLink } from 'react-router-dom'

function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className='border-b-4 border-[#872374] md:flex shadow-md shadow-gray-700 pb-2 md:pt-2 justify-between bg-slate-900 text-white'>
            <div className="md:container mx-auto md:flex 
            justify-between items-center">
                <div className="flex justify-between">
                    <NavLink to={'/'}><h1 className='font-thin text-2xl m-3 md:m-0'><span className='bg-gradient-to-r from-indigo-600 via-blue-800 to-pink-700 text-white px-3 rounded-xl py-1 font-semibold'>Hasibul</span>Islam</h1></NavLink>
                    <svg onClick={handleToggle} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-9 mr-6 mt-3 md:hidden">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                    </svg>
                </div>

                <ul className='text-center hidden md:flex gap-4 '>
                    <li className='md:hover:bg-transparent hover:bg-yellow-200 py-2'><NavLink to={'/'}>Home</NavLink></li>
                    <li className='md:hover:bg-transparent hover:bg-yellow-200 py-2'><NavLink to={'/about'}>About</NavLink></li>
                    <li className='md:hover:bg-transparent hover:bg-yellow-200 py-2'><NavLink to={'/blogs'}>Blogs</NavLink></li>
                </ul>

                {/* mobile screen */}
                {isOpen && <ul className='text-center md:hidden flex-col flex gap-1 '>
                    <NavLink className={'py-2 hover:bg-[#971F6E] hover:text-white transition-colors'} to={'/'}>Home</NavLink>
                    <NavLink className={'py-2 hover:bg-[#971F6E] hover:text-white transition-colors'} to={'/about'}>About</NavLink>
                    <NavLink className={'py-2 hover:bg-[#971F6E] hover:text-white transition-colors'} to={'/blogs'}>Blogs</NavLink>
                </ul>}

            </div>

        </div>
    )
}

export default Navbar