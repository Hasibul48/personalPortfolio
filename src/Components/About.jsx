import React from 'react'

function About() {
    return (
        <div className='md:mt-10 mt-28 container'>
            <h2 className='text-center font-handWriting md:text-5xl text-4xl tracking-wider '>About Me</h2>
            <div className="md:flex justify-center items-center">
                <div className="flex-1 px-7">
                    <h2 className='text-themeColor font-extrabold md:text-xl md:text-start mt-7'>Who is Hasibul?</h2>
                    <p className='font-extralight tracking-widest md:text-start'>I am Hasibul a passionate MERN stack web developer with a strong foundation in MongoDB, Express.js, React.js, and Node.js. Although I have no formal work experience, I have completed several personal and academic projects that showcase my skills. I am dedicated to writing clean, maintainable code and continuously learning new technologies. I am eager to collaborate with experienced developers and contribute to impactful projects.</p>
                </div>

                <div className="flex-1 px-10 pt-10">
                    <img className='headerImg mx-auto md:w-3/4 shadow-2xl shadow-gray-700 border-4 border-themeColor' src="img/profileImage2.jpg" alt="image missing..." />
                </div>

            </div>
        </div>
    )
}

export default About