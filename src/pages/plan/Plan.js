import React from 'react';

import styled from 'styled-components';

import Hero from './Hero';

const PlanWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

function Plan() {
    return (
        <PlanWrapper>
            <header>
                <Hero />
            </header>
            <main></main>
            <footer></footer>
        </PlanWrapper>
    );
}

export default Plan;
