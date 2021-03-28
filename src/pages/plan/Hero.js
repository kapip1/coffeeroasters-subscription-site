import React from 'react';

import styled from 'styled-components';

import heroBgDesktop from '../../assets/plan/desktop/image-hero-blackcup.jpg';
import heroBgTablet from '../../assets/plan/tablet/image-hero-blackcup.jpg';
import heroBgMobile from '../../assets/plan/mobile/image-hero-blackcup.jpg';

const HeroWrapper = styled.div`
    display: flex;
    margin-top: 50px;
    height: 400px;
    background: url(${heroBgDesktop}) no-repeat;
    background-size: cover;
    border-radius: 12px;
    padding: 100px 40px;
    @media (max-width: 1100px) {
        background: url(${heroBgTablet});
        background-size: cover;
    }
    @media (max-width: 750px) {
        background: url(${heroBgMobile});
        background-size: cover;
        justify-content: center;
        text-align: center;
    }
`;

const HeroContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 450px;
    @media (max-width: 750px) {
        width: 279px;
    }
`;

const HeroTitle = styled.span`
    color: hsl(43, 78%, 98%);
    font-size: 7.2rem;
    font-family: 'Fraunces', serif;
    font-weight: 700;
    @media (max-width: 750px) {
        font-size: 4.2rem;
    }
`;

const HeroText = styled.p`
    margin-top: 30px;
    color: hsl(43, 78%, 98%);
    font-size: 1.6rem;
`;

function Hero() {
    return (
        <HeroWrapper>
            <HeroContent>
                <HeroTitle>Create plan</HeroTitle>
                <HeroText>
                    Coffee the way you wanted it to be. For coffee delivered
                    tomorrow, or next week. For whatever brew method you use.
                    For choice, for convenience, for quality.
                </HeroText>
            </HeroContent>
        </HeroWrapper>
    );
}

export default Hero;
