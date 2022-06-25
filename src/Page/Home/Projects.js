import React from 'react';
import ProjectsItem from './ProjectsItem';
import SectionTitle from './SectionTitle';

const allProjects = [
    {
        title: 'Bike Manufactur App',
        imgUrl:
            'https://i.ibb.co/bsxv9wm/bike-Manufacture.png',
        tech: ['React JS', 'Firebase', 'Heroku', 'Tailwind', 'DaisyUI'],
        liveUrl: 'https://bike-menufacture.web.app',
    },
    {
        title: "Bike Warehouse App",
        imgUrl:
            'https://i.ibb.co/Mh83Pv0/screencapture-localhost-3000-2022-06-24-23-56-07.png',
        tech: ['HTML', 'CSS', 'Netlify'],
        liveUrl: 'https://coruscating-paprenjak-937b30.netlify.app',
    },
    {
        title: "Dr. Azaz Ahmed",
        imgUrl:
            'https://i.ibb.co/2hyYjh6/screencapture-localhost-3000-2022-06-25-03-47-20.png',
        tech: ["React JS", "Firebase", "Bootstrap"],
        liveUrl: "https://majestic-lebkuchen-6ca8f3.netlify.app",
    },
    {
        title: 'Product Analysis Website',
        imgUrl: `https://i.ibb.co/yn9xT3c/laptop.png`,
        tech: ['React JS', 'Tailwind CSS', 'CSS'],
        liveUrl: 'https://adorable-nougat-9e5494.netlify.app',
    }
];

const Projects = () => {
    return (
        <div className='py-12'>
            <SectionTitle id="projects">Recent Projects</SectionTitle>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>{
                allProjects.map(project => (<ProjectsItem key={project.title}
                    project={project}></ProjectsItem>))
            }
            </div>
        </div>
    );
};

export default Projects;