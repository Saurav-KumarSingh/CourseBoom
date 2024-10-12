import React from 'react'
import { Link } from 'react-router-dom'
import introVideo from '../../assets/videos/intro.mp4'


const Home = () => {
    return (
        <div>
            <section className=" body-font ">
                <div className="container mx-auto flex md:px-24 md:py-10 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow mt-5 md:mt-0 md:w-1.5/2 lg:pr-24 md:pr-16 flex flex-col md:items-end md:text-right mb-16 md:mb-0 items-center text-center">
                        <h1 className="text-2xl font-bold leading-9  mb-3  sm:text-4xl sm:leading-10 md:text-5xl md:leading-normal">
                            LEARN FROM THE EXPERTS
                        </h1>
                        <p className="mb-8 md:pl-0 pl-2 pr-2 leading-relaxed">
                            Find Valuable Content At Reasonable Price
                        </p>
                        <div className="flex justify-end">
                            <Link to='/' className="text-white px-8 py-2 bg-gradient-to-r from-blue-500 to-purple-500  font-bold rounded transition-transform transform-gpu hover:shadow-lg">
                                Explore Now
                            </Link>
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full mb-5 md:mb-0 md:w-1/2 w-3/6">
                        <img className="object-cover object-center rounded" alt="hero" src="https://www.svgrepo.com/show/490900/hot-air-balloon.svg" />
                    </div>
                </div>
            </section>
            <section className="flex items-center justify-center min-h-screen ">
                <video autoPlay muted loop className="w-[95vw] md:w-[80vw] rounded-t-lg">
                    <source src={introVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </section>
            <section className='my-56'>
                <div className="container mx-auto max-w-5xl flex gap-12 flex-wrap items-start justify-center md:justify-between">
                    {/* Personalized Learning */}
                    <div className="grid gap-4 justify-items-center text-center md:flex-1">
                        <div className="rounded-full border-8 border-purple-700 p-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-14 h-14">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                            </svg>
                        </div>
                        <h3 className="text-3xl font-bold">Personalized Learning</h3>
                        <p>Students practice at their own pace, filling in gaps in their understanding and accelerating their learning in technical subjects.</p>
                    </div>

                    {/* Trusted Content */}
                    <div className="grid gap-4 justify-items-center text-center md:flex-1">
                        <div className="rounded-full border-8 border-purple-700 p-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-14 h-14">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                            </svg>
                        </div>
                        <h3 className="text-3xl font-bold">Trusted Content</h3>
                        <p>CourseBoom’s comprehensive library features standards-aligned lessons across various technical subjects, all provided free for learners and educators.</p>
                    </div>

                    {/* Proven Results */}
                    <div className="grid gap-4 justify-items-center text-center md:flex-1">
                        <div className="rounded-full border-8 border-purple-700 p-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-14 h-14">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                            </svg>
                        </div>
                        <h3 className="text-3xl font-bold">Proven Results</h3>
                        <p>CourseBoom is dedicated to providing innovative tools and effective learning strategies that empower students to achieve their educational goals.</p>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Home