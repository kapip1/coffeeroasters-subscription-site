import React from 'react';

import Hero from './Hero';
import Footer from '../../components/Footer';
import Commitment from './Commitment';

function About() {
    return (
        <>
            <header>
                <Hero />
            </header>
            <main>
                <Commitment />
            </main>
            <Footer />
        </>
    );
}

export default About;
