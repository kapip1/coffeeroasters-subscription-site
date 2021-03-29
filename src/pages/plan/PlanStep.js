import React, { useState, useContext } from 'react';

import styled, { css } from 'styled-components';

import { AppContext } from '../../AppContext';

import planIcon from '../../assets/plan/desktop/icon-arrow.svg';

const PlanStepWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
`;

const PlanStepInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    & div {
        transform: rotate(${({ data }) => (data.open ? '180deg' : '0deg')});
        @media (max-width: 750px) {
            transform: rotate(180deg);
        }
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
    display: ${({ data }) =>
        data.open && data.block === false ? 'flex' : 'none'};
    justify-content: space-between;
    margin-top: 30px;
    @media (max-width: 750px) {
        display: flex;
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
    ${({ option, optionNumber }) =>
        option === optionNumber
            ? css`
                  background-color: hsl(179, 81%, 29%);
              `
            : css`
                  background-color: #f4f1eb;
                  &:hover {
                      background-color: hsl(25, 94%, 86%);
                  }
              `};
    color: hsl(215, 19%, 25%);
    @media (max-width: 750px) {
        margin-top: 30px;
        width: 100%;
        height: 140px;
    }
`;

const StepTitle = styled.span`
    font-size: 2.38rem;
    font-weight: 700;
    font-family: 'Fraunces', serif;
`;

const StepText = styled.p`
    margin-top: 20px;
    font-size: 1.6rem;
`;

function PlanStep({ store, data }) {
    const [option, setOption] = useState(0);

    const handleStepClick = (option, id) => {
        getOption(option, id);
        setOption(option);
    };

    const { getOption } = useContext(AppContext);
    console.log(option, 'opcja');
    return (
        <PlanStepWrapper>
            <PlanStepInfo data={data}>
                <PlanStepTitle>{store.title}</PlanStepTitle>
                <PlanStepIcon />
            </PlanStepInfo>
            <PlanStepSection data={data}>
                {store.steps.map((step, i) => (
                    <Step
                        key={step.title}
                        onClick={() => handleStepClick(i + 1, store.id)}
                        option={option}
                        optionNumber={i + 1}
                    >
                        <StepTitle>{step.title}</StepTitle>
                        <StepText>{step.text}</StepText>
                    </Step>
                ))}
            </PlanStepSection>
        </PlanStepWrapper>
    );
}

export default PlanStep;
