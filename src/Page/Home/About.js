import React from 'react';
import SectionTitle from './SectionTitle';

const About = () => {
    return (
        <div id='#about' className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-12">
            <img
                src={`https://i.ibb.co/QFQTHrN/Pics-Art-10-13-12-01-59-removebg-preview.png`}
                alt="Naeem"
                className="w-full md:w-6/12 rounded-lg object-cover"
            />
            <div className="w-full md:w-6/12">
                <SectionTitle id="about">About Me</SectionTitle>
                <p className="text-md text-gray-600 dark:text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
                    veniam dolor consectetur pariatur explicabo, iure nulla. Dolor
                    debitis, natus cum ad, fugiat excepturi minima culpa atque modi
                    accusantium vel voluptatem?
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