import React from 'react';

import Hero from './Hero';
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
        </>
    );
}

export default About;
