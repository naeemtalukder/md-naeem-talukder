import React from 'react';

const Footer = () => {
    return (
        <div className="py-5 bg-slate-800 text-center text-gray-300 rounded-t-lg">
            <a href="/" className="block text-xl md:text-2xl font-semibold">
                Naeem Talukder
            </a>
            <a
                href="mdnaeemtalukder1@emial.com"
                className="text-sm md:text-md hover:text-indigo-500"
            >
                mdnaeemtalukder1@gmail.com
            </a>
            <p className="text-xs mt-2 text-gray-500">
                © Naeem Talukder {new Date().getFullYear()}. All rights reserved
            </p>
        </div>
    );
};

export default Footer;