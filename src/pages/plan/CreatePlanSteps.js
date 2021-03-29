import React, { useContext, useEffect } from 'react';

import styled from 'styled-components';

import { AppContext } from '../../AppContext';
import { store } from './store';
import PlanStep from './PlanStep';
import Summary from './Summary';

const CreatePlanStepsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 730px;
`;

function CreatePlanSteps() {
    const { preferences, bean, quantity, grind, deliveries } = useContext(
        AppContext
    );

    useEffect(() => {}, []);

    return (
        <CreatePlanStepsWrapper>
            <PlanStep store={store[0]} data={preferences} />
            <PlanStep store={store[1]} data={bean} />
            <PlanStep store={store[2]} data={quantity} />
            <PlanStep store={store[3]} data={grind} />
            <PlanStep store={store[4]} data={deliveries} />
            <Summary />
        </CreatePlanStepsWrapper>
    );
}

export default CreatePlanSteps;
