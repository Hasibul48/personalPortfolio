import React from 'react'

import AboutComponent from '../Components/About'
import { Link } from 'react-router-dom'
import Contact from '../Components/Contact'
function About() {
    return (
        <>
            <div className='shadow-lg shadow-gray-700 border-themeColor border rounded-2xl mt-6   container mx-auto py-4 flex flex-col gap-5'>
                <AboutComponent />
                <div className="px-7">
                    <div className="textSection text-center mt-10">
                        <b className='md:text-2xl text-xl'>My Skills</b>
                        <p className='md:text-xl text-start flex flex-col gap-5 mt-6'>
                            <li>MongoDB: Experienced in designing and managing NoSQL databases, ensuring efficient data storage and retrieval.</li>
                            <li>Express.js: Proficient in building robust and scalable server-side applications.</li>
                            <li>React.js: Skilled in creating dynamic and responsive user interfaces, ensuring an optimal user experience.</li>
                            <li>Node.js: Capable of developing fast and efficient backend services using JavaScript.</li>
                        </p>
                    </div>
                    <div className="textSection text-center mt-10">
                        <h3 className='md:text-2xl text-xl'>Projects</h3>
                        <div className='md:text-xl text-start flex flex-col gap-5 mt-6'>
                            <li>Project 1: Your quiz app, built with vanilla JavaScript, offers an interactive experience by managing page transitions, displaying questions dynamically, and evaluating answers in real-time. It features a countdown timer for each question and automatically advances when time expires. After completing the quiz, the app presents the user's score, including correct and incorrect answers, and provides options to replay or refresh the quiz. The code efficiently handles these core functionalities, ensuring a smooth user experience.
                                <Link className='text-yellow-500 ml-5' to={"https://beautiful-meerkat-f5530a.netlify.app/"}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 inline">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                                    </svg>
                                    Live Preview</Link></li>
                            <li>Project 2: ----------------------------------------------------------</li>
                            <li>Project 3: ----------------------------------------------------------</li>

                        </div>
                    </div>
                    <div className="textSection text-start mt-10">
                        <h3 className='flex md:text-2xl text-xl'><span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-themeColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" />
                        </svg></span>
                            My Approach :</h3>
                        <p className='md:text-xl text-start flex flex-col gap-5 mt-2'>
                            I believe in writing clean, maintainable code and following best practices. Collaboration and communication are key aspects of my workflow, and I am always open to feedback and new ideas. My goal is to contribute to meaningful projects that have a positive impact.
                        </p>
                    </div>
                    <div className="textSection text-center mt-10">
                        <h3 className='flex md:text-2xl text-xl'><span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-themeColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" />
                        </svg></span>
                            Looking Forward :</h3>
                        <p className='md:text-xl text-start flex flex-col gap-5 mt-2'>
                            I am eager to bring my enthusiasm and technical skills to a professional setting where I can collaborate with experienced developers and contribute to exciting projects. I am confident that my dedication and passion for web development will make me a valuable asset to any team.
                        </p>
                    </div>
                    <div className="textSection text-center mt-10">
                        <p className='md:text-xl text-lg'>Feel free to reach out to me if you would like to know more about my work or discuss potential opportunities!</p>

                    </div>
                </div>
            </div>
            <Contact />
        </>
    )
}

export default About