import React from 'react';
import { MdWeb } from 'react-icons/md';
import { FaHandHoldingHeart } from 'react-icons/fa';
import { VscCode } from 'react-icons/vsc';
import SectionTitle from './SectionTitle';
import ServiceItem from './ServiceItem';
const allServices = [
    {
        title: 'Web Development',
        icon: <VscCode className="w-full h-full" />,
        description:
            "I am working on frontend technologies and also working on backend technologies.S I'm highly passionate about MongoDB, Express.js, React JS, Node.js.",
    },
    {
        title: 'Web Design',
        icon: <MdWeb className="w-full h-full" />,
        description:
            'I will make your website with unique design by useing Tailwind Css and other React Components library.',
    },
    {
        title: 'Ui Design',
        icon: <FaHandHoldingHeart className="w-full h-full" />,
        description:
            "Users will be quite satisfied with the design and use, and your website will be made attractive, and you will be satisfied.",
    }

]

const Services = () => {
    return (
        <div className='py-12'>
            <SectionTitle>Our Services</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    allServices.map(s => <ServiceItem key={s.title} s={s}></ServiceItem>)
                }
            </div>
        </div>
    );
};

export default Services;