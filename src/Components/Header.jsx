import React from 'react'

function Header() {
    return (
        <div className='md:flex md:py-32 justify-center container p-10 items-center'>
            <div className="flex-1">
                <img className={'headerImg mx-auto lg:w-3/4 shadow-2xl shadow-gray-700 border-4 border-themeColor'} src="img/profileImage.jpg" alt="image missing..." />
            </div>
            <div className="flex-1 md:ml-16 md:mt-0 mt-20 md:text-start text-center leading-8 md:leading-10">
                <h1 className='text-themeColor font-extrabold md:text-xl'>Hi, I am</h1>
                <h2 className='font-handWriting md:text-4xl text-3xl tracking-wider'>Hasibul Islam</h2>
                <p className='font-extralight tracking-widest'>Programmer, Web Developer (MERN), Contributor</p>
            </div>
        </div>
    )
}

export default Header