import React from 'react';
import SectionTitle from './SectionTitle';

const About = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-12">
            <img
                src={`https://i.ibb.co/QFQTHrN/Pics-Art-10-13-12-01-59-removebg-preview.png`}
                alt="Naeem"
                className="w-full md:w-6/12 rounded-lg object-cover"
            />
            <div className="w-full md:w-6/12">
                <SectionTitle>About Me</SectionTitle>
                <h1 className='text-xl md:text-2xl mb-1 md:mb-3 text-indigo-600 font-semibold dark:text-indigo-500'>Hi, I'm Md. Naeem Talukder</h1>
                <p className='text-md md:text-xl max-w-md mb-3 text-gray-600 dark:text-gray-300'>Web Developer | MERN Stack Developer</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                    I am Md. Naeem Talukder. I am a Junior Front-end web developer. Now, I am working on frontend technologies and also working on backend technologies. I have completed some simple projects using react.js. I'm highly passionate about MongoDB, Express.js, React JS, Node.js. I love to do Coding.
                </p>
                <a
                    href="mailto:webcifar.com"
                    className="block mt-3 text-md md:text-lg text-gray-700 dark:text-gray-300 underline decoration-1 hover:text-indigo-500 dark:hover:text-indigo-500"
                >
                    mdnaeemtalukder1@gmail.com
                </a>
                <a href="#" className='inline-block px-8 py-3 my-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-700 md:text-md'>Hire Me</a>

            </div>

        </div>
    );
};

export default About;