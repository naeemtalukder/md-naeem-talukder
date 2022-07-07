import React from 'react';
import Contact from '../Sheard/Contact';
import HeroSection from './HeroSection';
import Projects from './Projects';
import Services from './Services';
import Skills from './Skills';


const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <Services></Services>
            <Projects></Projects>
            <Skills></Skills>
            <Contact></Contact>
        </div>
    );
};

export default Home;