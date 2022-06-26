import React from 'react';
import ProjectsItem from './ProjectsItem';
import SectionTitle from './SectionTitle';

const allProjects = [
    {
        title: 'Bike Manufactur App',
        imgUrl:
            'https://i.ibb.co/xLqLbNr/screencapture-bike-menufacture-web-app-2022-06-27-02-23-03.png',
        tech: ['React.js', 'React Tailwind', 'Firebase', 'DaisyUI', 'React Toost', 'JWT', 'React Hook Form', 'Node.js', 'Express.js', 'MongoDB'],
        liveUrl: 'https://bike-menufacture.web.app',
        clientUrl: 'https://github.com/naeemtalukder/bike-menufacture-app.git',
        serverUrl: 'https://github.com/naeemtalukder/bike-manufacter-server-site.git',
    },
    {
        title: "Bike Warehouse App",
        imgUrl:
            'https://i.ibb.co/CwTV8kR/screencapture-localhost-3000-2022-06-24-23-56-07.png',
        tech: ['React.js', 'React Bootstrap', 'Firebase', 'CSS', 'React Toost', 'React Hook Form', 'Node.js', 'Express.js', 'MongoDB'],
        liveUrl: 'https://coruscating-paprenjak-937b30.netlify.app',
        clientUrl: 'https://github.com/naeemtalukder/bike-warehouse-menegement.git',
        serverUrl: 'https://github.com/naeemtalukder/bike-warehouse-management-server.git',
    },
    {
        title: "Dr. Azaz Ahmed",
        imgUrl:
            'https://i.ibb.co/2hyYjh6/screencapture-localhost-3000-2022-06-25-03-47-20.png',
        tech: ['React.js', 'React Bootstrap', 'Firebase', 'React Toost', 'React Hook Form'],
        liveUrl: "https://majestic-lebkuchen-6ca8f3.netlify.app",
        clientUrl: 'https://github.com/naeemtalukder/doctor-azaz-ahmed.git',

    },
    {
        title: 'Laptop Zone BD',
        imgUrl: `https://i.ibb.co/yn9xT3c/laptop.png`,
        tech: ['React.js', 'React Tailwind', 'CSS'],
        liveUrl: 'https://adorable-nougat-9e5494.netlify.app',
        clientUrl: 'https://github.com/naeemtalukder/projects-analayz.git',

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