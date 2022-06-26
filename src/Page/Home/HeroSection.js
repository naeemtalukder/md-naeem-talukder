import React from 'react';

const HeroSection = () => {
    return (
        <div id='hero' className='flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-12'>
            <div className="w-full md:w-6/12 text-center">
                <h1 className='text-2xl md:text-4xl mb-1 md:mb-3 text-indigo-600 font-semibold dark:text-indigo-500'>Hi, I'm Md. Naeem Talukder</h1>
                <p className='text-md md:text-xl max-w-md mb-3 text-gray-600 dark:text-gray-300'>Web Developer | Front-end web developer</p>
                <p className='text-sm md:text-sm max-w-md mb-3 text-gray-500 dark:text-gray-200'>I'm creative Front-end web developer based in Bangladesh, and I'm very passionate and dedicated to my work.</p>
                <a href="https://drive.google.com/u/1/uc?id=1L8oBVImzE7JH-DpvOBcg93DRFIJG6myq&export=download" className='inline-block px-8 py-3 my-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-700 md:text-md'>Download Resume</a>
            </div>
            <img
                src={`https://avatars.githubusercontent.com/u/96875994?s=400&u=37980093c3219c4318e465b09647c663a7174330&v=4`}
                alt="Naeem"
                className="w-full md:w-6/12 rounded-lg object-cover"
            />
        </div>
    );
};

export default HeroSection;