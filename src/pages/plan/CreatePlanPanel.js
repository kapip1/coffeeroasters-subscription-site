import React, { useContext } from 'react';

import styled, { css } from 'styled-components';

import { AppContext } from '../../AppContext';

const CreatePlanPanelWrapper = styled.div`
    display: flex;
    flex-direction: column;
    @media (max-width: 1100px) {
        display: none;
    }
`;

const PanelNumber = styled.span`
    color: ${({ first }) =>
        first ? 'hsl(179, 81%, 29%)' : 'hsl(215, 5%, 54%)'};
`;

const PanelText = styled.p`
    margin-left: 20px;
    color: hsl(215, 19%, 25%);
`;

const PlanContent = styled.div`
    display: flex;
    transition: 0.3s;
    font-size: 2.4rem;
    font-family: 'Fraunces', serif;
    border-bottom: ${({ last }) =>
        last ? null : '1px solid hsl(215, 5%, 54%)'};
    font-weight: 700;
    width: 240px;
    padding: 20px 10px;
    opacity: ${({ step, stepNumber }) => (step === stepNumber ? 1 : 0.3)};
    ${({ disable }) =>
        disable
            ? null
            : css`
                  cursor: pointer;
                  &:hover {
                      opacity: 1;
                  }
              `}
`;

function CreatePlanPanel() {
    const { handlePanelClick, step, disable } = useContext(AppContext);
    return (
        <CreatePlanPanelWrapper>
            <PlanContent
                onClick={() => handlePanelClick(1)}
                stepNumber={1}
                step={step}
            >
                <PanelNumber first>01</PanelNumber>
                <PanelText>Preferences</PanelText>
            </PlanContent>
            <PlanContent
                onClick={() => handlePanelClick(2)}
                stepNumber={2}
                step={step}
            >
                <PanelNumber>02</PanelNumber>
                <PanelText>Bean Type</PanelText>
            </PlanContent>
            <PlanContent
                onClick={() => handlePanelClick(3)}
                stepNumber={3}
                step={step}
            >
                <PanelNumber>03</PanelNumber>
                <PanelText>Quality</PanelText>
            </PlanContent>
            <PlanContent
                onClick={() => handlePanelClick(4)}
                stepNumber={4}
                step={step}
                disable={disable}
            >
                <PanelNumber>04</PanelNumber>
                <PanelText>Grind Option</PanelText>
            </PlanContent>
            <PlanContent
                last
                onClick={() => handlePanelClick(5)}
                stepNumber={5}
                step={step}
            >
                <PanelNumber>05</PanelNumber>
                <PanelText>Deliveries</PanelText>
            </PlanContent>
        </CreatePlanPanelWrapper>
    );
}

export default CreatePlanPanel;
