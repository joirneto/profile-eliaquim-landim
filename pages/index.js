import React from 'react';
import PageHead from '../components/PageHead';
import Hero from '../components/Hero';
import Summary from '../components/Summary';
import Education from '../components/Education';
import Footer from '../components/Footer';
import Repos from '../components/Repos';
import Experience from '../components/Experience';

const Index = ({ user, repos }) => {
    return (
        <div className='bg-betwork'>
            <PageHead/>
            <Hero/>
            <Summary/>
            <Experience/>
            <Education/>
            <Footer/>
        </div>
    )
}

export default Index;