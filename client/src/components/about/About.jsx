import React from 'react';
import FounderImg from '../../assets/images/founder.png'
import { Link } from 'react-router-dom';
import introVideo from '../../assets/videos/intro.mp4'
import TermAndCondition from '../../assets/docs/termsAndCondition.js'

const About = () => {
    return (
        <div>
            <section className="pt-10 md:pt-0 sm:pt-16 2xl:pt-16">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="grid items-center grid-cols-1 md:grid-cols-2 gap-8">

                        {/* Text Section */}
                        <div>
                            <h2 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl mb-4">
                                Saurav Kumar Singh
                            </h2>
                            <p className="max-w-lg  leading-relaxed text-lg ">
                                Hi, I am a full-stack developer, Our mission is to provide quality content at a reasonable price.
                            </p>
                        </div>

                        {/* Image Section */}
                        <div className="relative flex flex-col items-center justify-center">
                            <img
                                className="h-72 w-72 rounded-full  object-cover shadow-lg"
                                src={FounderImg}
                                alt="Saurav Kumar Singh"
                            />
                            <p className="text-center text-lg font-semibold mt-4">Founder</p>
                        </div>

                    </div>
                </div>
            </section>
            <section>
                <div className='md:flex md:justify-between px-1  md:px-25 items-center py-10 font-semibold'>
                    <div className='my-4'>We are a video streaming platform with some courses available only for premium users</div>
                    <Link to='#' className='text-purple-700 border px-2 py-1 rounded border-purple-700'>Checkout Our Plan</Link>
                </div>
            </section>
            <section className="flex items-center justify-center md:min-h-screen my-4 md:my-0">
                <video autoPlay muted loop className="w-[95vw] md:w-[80vw] rounded-t-lg">
                    <source src={introVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </section>
            <section className='md:px-36 px-2'>
                <h1 className='text-center font-semibold text-xl mt-5 mb-10'>Terms & Condition </h1>
                <div >
                    <p className="text-center md:text-justify overflow-y-scroll max-h-[70vh] my-16 scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-300">
                        {TermAndCondition}
                    </p>

                </div>
            </section>

        </div>
    );
};

export default About;
