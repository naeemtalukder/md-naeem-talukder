import React from 'react';
import { Link } from 'react-router-dom';


const Nabvar = () => {
    return (
        <div className='sticky top-0 bg-slate-800 dark:bg-slate-900 px-12 py-6 flex justify-center text-gray-300 dark:text-indigo-400 rounded-b-lg'>
            <div className='flex text-xs font-semibold font-serif gap-5'>
                <Link to='/'>HOME</Link>
                <Link to='about'>ABOUT</Link>
                <Link to='/project'>PROJECT</Link>
                <Link to='/blogs'>BLOGS</Link>
            </div>
        </div>
    );
};

export default Nabvar;