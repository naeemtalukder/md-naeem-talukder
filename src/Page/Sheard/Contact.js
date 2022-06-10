import React from 'react';
import SectionTitle from '../Home/SectionTitle';

const Contact = () => {

    return (
        <div className='py-12'>
            <SectionTitle>Contact</SectionTitle>
            <form action="https://formsubmit.co/ca1998f5cbf868b5d88f106cdce59a8e" method="POST" className='flex bg-slate-800 dark:bg-slate-800 items-center justify-center flex-col py-20 rounded-lg'>
                <input className='my-3 p-2' type="text" name="name" placeholder='Name' id="name" required />
                <input className='my-3 p-2' type="email" name="email" id="email" placeholder='Email' required />
                <textarea className='my-3 p-2' name="message" placeholder='Your Message' required />
                <button className='my-3 btn bg-indigo-600 p-3 text-white rounded' type='submit'>Send Email</button>
            </form>
        </div>
    );
};

export default Contact;