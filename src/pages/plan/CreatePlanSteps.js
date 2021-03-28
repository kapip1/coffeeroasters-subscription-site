import React, { useContext, useState } from 'react';

import styled from 'styled-components';

import { AppContext } from '../../AppContext';
import { store } from './store';
import PlanStep from './PlanStep';

const CreatePlanStepsWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

function CreatePlanSteps() {
    const { step } = useContext(AppContext);

    return (
        <CreatePlanStepsWrapper>
            <PlanStep store={store[0]} />
            <PlanStep store={store[1]} />
            <PlanStep store={store[2]} />
            <PlanStep store={store[3]} />
            <PlanStep store={store[4]} />
        </CreatePlanStepsWrapper>
    );
}

export default CreatePlanSteps;
