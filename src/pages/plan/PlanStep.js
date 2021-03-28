import React, { useState } from 'react';

import styled from 'styled-components';

import planIcon from '../../assets/plan/desktop/icon-arrow.svg';

const PlanStepWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 60px;
`;

const PlanStepInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 730px;
    & div {
        transform: rotate(
            ${({ isStepOpen }) => (isStepOpen ? '180deg' : '0deg')}
        );
    }
    @media (max-width: 750px) {
        width: 325px;
        margin: auto;
    }
`;

const PlanStepIcon = styled.div`
    background: url(${planIcon});
    width: 19px;
    height: 12px;
`;

const PlanStepTitle = styled.span`
    font-size: 4rem;
    font-family: 'Fraunces', serif;
    color: hsl(215, 5%, 54%);
    font-weight: 700;
    @media (max-width: 750px) {
        font-size: 2.2rem;
    }
`;

const PlanStepSection = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    @media (max-width: 750px) {
        flex-direction: column;
        align-items: center;
        text-align: start;
    }
`;

const Step = styled.div`
    display: flex;
    flex-direction: column;
    padding: 25px 30px;
    cursor: pointer;
    transition: 0.4s;
    width: 228px;
    height: 250px;
    border-radius: 12px;
    background-color: #f4f1eb;
    color: hsl(215, 19%, 25%);
    &:hover {
        background-color: hsl(25, 94%, 86%);
    }
    @media (max-width: 750px) {
        margin-top: 30px;
        width: 100%;
        height: 140px;
    }
`;

const StepTitle = styled.span`
    font-size: 2.4rem;
    font-weight: 700;
    font-family: 'Fraunces', serif;
`;

const StepText = styled.p`
    margin-top: 20px;
    font-size: 1.6rem;
`;

function PlanStep({ store }) {
    const [isStepOpen, setIsStepOpen] = useState(true);

    return (
        <PlanStepWrapper>
            <PlanStepInfo isStepOpen={isStepOpen}>
                <PlanStepTitle>{store.title}</PlanStepTitle>
                <PlanStepIcon />
            </PlanStepInfo>
            <PlanStepSection>
                {store.steps.map((step) => (
                    <Step key={step.title}>
                        <StepTitle>{step.title}</StepTitle>
                        <StepText>{step.text}</StepText>
                    </Step>
                ))}
            </PlanStepSection>
        </PlanStepWrapper>
    );
}

export default PlanStep;
