import React from 'react';

import styled from 'styled-components';

import { HeroButton } from '../home/Header';

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

const SummaryText = styled.p`
    margin-top: 15px;
    font-weight: 700;
    color: #fff;
    font-family: 'Fraunces', serif;
    font-size: 2.4rem;
`;

const SummaryButton = styled(HeroButton)`
    color: hsl(43, 78%, 98%);
`;

function Summary() {
    return (
        <SummaryWrapper>
            <SummaryContent>
                <SummaryTitle>order summary</SummaryTitle>
                <SummaryText>
                    “I drink my coffee using Capsules, with a _____ type of
                    bean. _____ , sent to me _____.”
                </SummaryText>
            </SummaryContent>
            <SummaryButton>Create my plan!</SummaryButton>
        </SummaryWrapper>
    );
}

export default Summary;
