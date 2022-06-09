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
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rerum quia harum eaque, quae laboriosam quisquam distinctio.',
    },
    {
        title: 'Web Design',
        icon: <MdWeb className="w-full h-full" />,
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rerum quia harum eaque, quae laboriosam quisquam distinctio.',
    },
    {
        title: 'Ui Design',
        icon: <FaHandHoldingHeart className="w-full h-full" />,
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rerum quia harum eaque, quae laboriosam quisquam distinctio.',
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