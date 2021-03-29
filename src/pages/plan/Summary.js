import React, { useContext } from 'react';

import styled, { css } from 'styled-components';

import { AppContext } from '../../AppContext';
import { HeroButton } from '../home/Header';
import SummaryText from './SummaryText';

const SummaryWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-end;
    @media (max-width: 750px) {
        align-items: center;
    }
`;
const SummaryContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 40px;
    color: #fff;
    background-color: hsl(215, 19%, 25%);
    border-radius: 12px;
    @media (max-width: 750px) {
        padding: 40px 20px;
    }
`;
const SummaryTitle = styled.span`
    text-transform: uppercase;
    font-size: 1.6rem;
    color: hsl(215, 5%, 54%);
`;

const SummaryButton = styled(HeroButton)`
    ${({ disabled }) =>
        disabled
            ? css`
                  background-color: hsl(215, 5%, 54%);
                  opacity: 0.3;
                  cursor: not-allowed;
                  &:hover {
                      background-color: hsl(215, 15%, 54%);
                  }
              `
            : null}
    color: hsl(43, 78%, 98%);
`;

function Summary() {
    const { handleIsAlert, calulateSubscription, isDisable } = useContext(
        AppContext
    );

    const validateSummaryClick = () => {
        calulateSubscription();
        handleIsAlert();
    };

    return (
        <SummaryWrapper>
            <SummaryContent>
                <SummaryTitle>Order summary</SummaryTitle>
                <SummaryText />
            </SummaryContent>
            <SummaryButton onClick={validateSummaryClick} disabled={isDisable}>
                Create my plan!
            </SummaryButton>
        </SummaryWrapper>
    );
}

export default Summary;
