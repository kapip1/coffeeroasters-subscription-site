import React from 'react';

import Hero from './Hero';
import Footer from '../../components/Footer';
import Commitment from './Commitment';
import Quality from './Quality';
import Headquarters from './Headquarters';

function About() {
    return (
        <>
            <header>
                <Hero />
            </header>
            <main>
                <Commitment />
                <Quality />
                <Headquarters />
            </main>
            <Footer />
        </>
    );
}

export default About;
