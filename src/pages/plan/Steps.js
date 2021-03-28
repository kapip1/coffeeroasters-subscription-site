import React from 'react';

import styled from 'styled-components';

import {
    HowItWorksBar,
    HowItWorksContentSection as StepsContentSection,
    HowItWorksContent as StepsContent,
    ContentNumber,
    ContentTitle,
    ContentText,
} from '../home/HowItWorks';

const StepsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 60px;
    min-height: 640px;
    background-color: hsl(215, 19%, 25%);
    margin-top: 150px;
    border-radius: 12px;
    @media (max-width: 750px) {
    }
`;

const StepsContentTitle = styled(ContentTitle)`
    color: hsl(43, 78%, 98%);
`;
const StepsContentText = styled(ContentText)`
    color: hsl(43, 78%, 98%);
`;
const StepsBar = styled(HowItWorksBar)`
    &::after {
        background-color: transparent;
    }
    &::before {
        background-color: transparent;
    }
    & span {
        background-color: transparent;
    }
`;

function Steps() {
    return (
        <StepsWrapper>
            <StepsBar>
                <span></span>
            </StepsBar>
            <StepsContentSection>
                <StepsContent>
                    <ContentNumber>01</ContentNumber>
                    <StepsContentTitle>Pick your coffee</StepsContentTitle>
                    <StepsContentText>
                        Select from our evolving range of artisan coffees. Our
                        beans are ethically sourced and we pay fair prices for
                        them. There are new coffees in all profiles every month
                        for you to try out.
                    </StepsContentText>
                </StepsContent>
                <StepsContent>
                    <ContentNumber>02</ContentNumber>
                    <StepsContentTitle>Choose the frequency</StepsContentTitle>
                    <StepsContentText>
                        Customize your order frequency, quantity, even your
                        roast style and grind type. Pause, skip or cancel your
                        subscription with no commitment through our online
                        portal.
                    </StepsContentText>
                </StepsContent>
                <StepsContent>
                    <ContentNumber>03</ContentNumber>
                    <StepsContentTitle>Receive and enjoy!</StepsContentTitle>
                    <StepsContentText>
                        We ship your package within 48 hours, freshly roasted.
                        Sit back and enjoy award-winning world-class coffees
                        curated to provide a distinct tasting experience.
                    </StepsContentText>
                </StepsContent>
            </StepsContentSection>
        </StepsWrapper>
    );
}

export default Steps;
