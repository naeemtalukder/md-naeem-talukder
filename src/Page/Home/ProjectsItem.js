import React from 'react';

const ProjectsItem = ({ project }) => {
    const { title, imgUrl, tech, liveUrl, clientUrl, serverUrl } = project;
    return (
        <div
            className="bg-slate-300 dark:bg-slate-800 rounded-lg overflow-hidden"
        >
            <img
                src={imgUrl}
                alt="work"
                className="w-full h-50 md:h-64 object-cover"
            />
            <div className="w-full p-5 text-gray-600 dark:text-gray-300 ">
                <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">
                    {title}
                </h3>
                <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm ">
                    <a className="inline-block px-2 py-1 me-1 mb-2 text-blue-800 bg-slate-100 dark:bg-slate-900 rounded-md" href={liveUrl} target="_blank" rel="noopener noreferrer">Live</a>
                    <a className="inline-block px-2 py-1 me-1 mb-2 text-blue-800 bg-slate-100 dark:bg-slate-900 rounded-md" href={clientUrl} target="_blank" rel="noopener noreferrer">Client Site</a>
                    <a className="inline-block px-2 py-1 me-1 mb-2 text-blue-800 bg-slate-100 dark:bg-slate-900 rounded-md" href={serverUrl} target="_blank" rel="noopener noreferrer">Server Site</a>
                </p>
                <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm ">
                    {tech.map(item => (
                        <span
                            key={item}
                            className="inline-block px-2 py-1 bg-slate-200 dark:bg-slate-900 rounded-md"
                        >
                            {item}
                        </span>
                    ))}
                </p>
            </div>
        </div>
    );
};

export default ProjectsItem;