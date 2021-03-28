import React from 'react';

import styled from 'styled-components';

import Hero from './Hero';
import Steps from './Steps';
import CreatePlanPanel from './CreatePlanPanel';
import CreatePlanSteps from './CreatePlanSteps';

const PlanWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;
const CreatePlanWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 70px;
    margin: 100px auto;
    @media (max-width: 1100px) {
        justify-content: center;
    }
`;

function Plan() {
    return (
        <PlanWrapper>
            <header>
                <Hero />
            </header>
            <main>
                <Steps />
                <CreatePlanWrapper>
                    <CreatePlanPanel />
                    <CreatePlanSteps />
                </CreatePlanWrapper>
            </main>
            <footer></footer>
        </PlanWrapper>
    );
}

export default Plan;
