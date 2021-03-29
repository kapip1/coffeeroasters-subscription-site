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
    opacity: ${({ active, data }) => (active ? '1' : '0.4')};
    ${({ data }) =>
        data.block
            ? css`
                  cursor: not-allowed;
              `
            : css`
                  cursor: pointer;
                  &:hover {
                      opacity: 1;
                  }
              `};
`;

function CreatePlanPanel() {
    const {
        setOpen,
        currentStep,
        preferences,
        bean,
        quality,
        grind,
        deliveries,
    } = useContext(AppContext);
    return (
        <CreatePlanPanelWrapper>
            <PlanContent
                onClick={() => setOpen(1)}
                active={currentStep === 1}
                data={preferences}
            >
                <PanelNumber first>01</PanelNumber>
                <PanelText>Preferences</PanelText>
            </PlanContent>
            <PlanContent
                onClick={() => setOpen(2)}
                active={currentStep === 2}
                data={bean}
            >
                <PanelNumber>02</PanelNumber>
                <PanelText>Bean Type</PanelText>
            </PlanContent>
            <PlanContent
                onClick={() => setOpen(3)}
                active={currentStep === 3}
                data={quality}
            >
                <PanelNumber>03</PanelNumber>
                <PanelText>Quality</PanelText>
            </PlanContent>
            <PlanContent
                onClick={() => setOpen(4)}
                active={currentStep === 4}
                data={grind}
            >
                <PanelNumber>04</PanelNumber>
                <PanelText>Grind Option</PanelText>
            </PlanContent>
            <PlanContent
                onClick={() => setOpen(5)}
                active={currentStep === 5}
                data={deliveries}
            >
                <PanelNumber>05</PanelNumber>
                <PanelText>Deliveries</PanelText>
            </PlanContent>
        </CreatePlanPanelWrapper>
    );
}

export default CreatePlanPanel;
