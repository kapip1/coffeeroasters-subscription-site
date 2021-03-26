import React from 'react';

import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { HeroButton } from './Header';

const HowItWorksWrapper = styled.div`
    display: flex;
    min-height: 565px;
    padding: 0 70px;
    flex-direction: column;
    justify-content: space-around;
    margin: 60px 0;
    @media (max-width: 750px) {
        align-items: center;
    }
`;
const HowItWorksTitle = styled.span`
    font-size: 2.4rem;
    font-weight: 700;
    color: hsl(215, 5%, 54%);
    margin-bottom: 35px;
    font-family: 'Fraunces', serif;
    @media (max-width: 750px) {
        text-align: center;
    }
`;

const HowItWorksBar = styled.div`
    display: flex;
    position: relative;
    height: 3px;
    width: 72%;
    background-color: hsl(25, 94%, 86%);
    &::after {
        content: '';
        position: absolute;
        transform: translate(-50%, -50%);
        top: 50%;
        left: 0%;
        width: 31px;
        border: 1px solid hsl(179, 81%, 29%);
        background-color: hsl(43, 78%, 98%);
        border-radius: 50%;
        height: 31px;
    }
    &::before {
        content: '';
        position: absolute;
        transform: translate(-50%, -50%);
        top: 50%;
        left: 50%;
        width: 31px;
        border: 1px solid hsl(179, 81%, 29%);
        background-color: hsl(43, 78%, 98%);
        border-radius: 50%;
        height: 31px;
    }
    & span {
        position: absolute;
        transform: translate(-50%, -50%);
        top: 50%;
        left: 100%;
        width: 31px;
        border: 1px solid hsl(179, 81%, 29%);
        background-color: hsl(43, 78%, 98%);
        border-radius: 50%;
        height: 31px;
    }
    @media (max-width: 750px) {
        display: none;
    }
`;
const HowItWorksContentSection = styled.div`
    display: flex;
    justify-content: space-between;
    @media (max-width: 750px) {
        flex-direction: column;
        align-items: center;
    }
`;

const HowItWorksContent = styled.div`
    display: flex;
    min-height: 355px;
    justify-content: space-around;
    flex-direction: column;
    width: 285px;
    @media (max-width: 750px) {
        align-items: center;
        text-align: center;
    }
`;

const ContentNumber = styled.span`
    font-size: 7.2rem;
    color: hsl(25, 94%, 86%);
    font-weight: 700;
    font-family: 'Fraunces', serif;
`;

const ContentTitle = styled.span`
    font-family: 'Fraunces', serif;
    font-size: 3.2rem;
    font-weight: 700;
    color: hsl(215, 19%, 25%);
`;

const ContentText = styled.p`
    font-size: 1.6rem;
    color: hsl(215, 19%, 25%);
`;

const CreatePlanBtn = styled(HeroButton)`
    color: hsl(43, 78%, 98%);
`;

function HowItWorks() {
    return (
        <HowItWorksWrapper>
            <HowItWorksTitle>How it works</HowItWorksTitle>
            <HowItWorksBar>
                <span></span>
            </HowItWorksBar>
            <HowItWorksContentSection>
                <HowItWorksContent>
                    <ContentNumber>01</ContentNumber>
                    <ContentTitle>Pick your coffee</ContentTitle>
                    <ContentText>
                        Select from our evolving range of artisan coffees. Our
                        beans are ethically sourced and we pay fair prices for
                        them. There are new coffees in all profiles every month
                        for you to try out.
                    </ContentText>
                </HowItWorksContent>
                <HowItWorksContent>
                    <ContentNumber>02</ContentNumber>
                    <ContentTitle>Choose the frequency</ContentTitle>
                    <ContentText>
                        Customize your order frequency, quantity, even your
                        roast style and grind type. Pause, skip or cancel your
                        subscription with no commitment through our online
                        portal.
                    </ContentText>
                </HowItWorksContent>
                <HowItWorksContent>
                    <ContentNumber>03</ContentNumber>
                    <ContentTitle>Receive and enjoy!</ContentTitle>
                    <ContentText>
                        We ship your package within 48 hours, freshly roasted.
                        Sit back and enjoy award-winning world-class coffees
                        curated to provide a distinct tasting experience.
                    </ContentText>
                </HowItWorksContent>
            </HowItWorksContentSection>
            <CreatePlanBtn>
                <Link to='/create-your-plan'>Create you plan</Link>
            </CreatePlanBtn>
        </HowItWorksWrapper>
    );
}

export default HowItWorks;
