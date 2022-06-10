import React from 'react';
import ProjectsItem from './ProjectsItem';
import SectionTitle from './SectionTitle';

const allProjects = [
    {
        title: 'Bike Manufactur App',
        imgUrl:
            'https://i.ibb.co/bsxv9wm/bike-Manufacture.png',
        tech: ['React JS', 'Firebase', 'Heroku', 'Tailwind', 'DaisyUI'],
        workUrl: 'https://github.com/programming-hero-web-course1/manufacturer-website-client-side-naeemtalukder.git/',
    },
    {
        title: "Bike Warehouse App",
        imgUrl:
            'https://i.ibb.co/zRVM6QD/bikew.png',
        tech: ['HTML', 'CSS', 'Netlify'],
        workUrl: 'https://github.com/ProgrammingHeroWC4/warehouse-management-client-side-naeemtalukder',
    },
    {
        title: "Dr. Azaz Ahmed",
        imgUrl:
            'https://i.ibb.co/LRkc2dD/doctor.png',
        tech: ["React JS", "Firebase", "Bootstrap"],
        workUrl: "https://github.com/programming-hero-web-course-4/independent-service-provider-naeemtalukder.git",
    },
    {
        title: 'Product Analysis Website',
        imgUrl: `https://i.ibb.co/yn9xT3c/laptop.png`,
        tech: ['React JS', 'Tailwind CSS', 'CSS'],
        workUrl: 'https://majestic-lebkuchen-6ca8f3.netlify.app',
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