import React from 'react';

import styled from 'styled-components';

import heroBgDesktop from '../../assets/about/desktop/image-hero-whitecup.jpg';
import heroBgMobile from '../../assets/about/mobile/image-hero-whitecup.jpg';

const HeroWrapper = styled.div`
    display: flex;
    background: url(${heroBgDesktop});
    height: 400px;
    border-radius: 12px;
    margin-top: 50px;
    color: hsl(43, 78%, 98%);
    padding: 100px 40px;
    @media (max-width: 750px) {
        justify-content: center;
        text-align: center;
        padding: 80px 30px;
        background: url(${heroBgMobile}) no-repeat;
        background-size: cover;
    }
`;

const HeroTitle = styled.span`
    display: flex;
    font-family: 'Fraunces', serif;
    margin-bottom: 20px;
    font-weight: 700;
    flex-direction: column;
    font-size: 4rem;
`;

const HeroContent = styled.div`
    width: 90%;
    max-width: 445px;
`;

const HeroText = styled.p`
    font-size: 1.6rem;
`;

function Hero() {
    return (
        <HeroWrapper>
            <HeroContent>
                <HeroTitle>About Us</HeroTitle>
                <HeroText>
                    Coffeeroasters began its journey of exotic discovery in
                    1999, highlighting stories of coffee from around the world.
                    We have since been dedicated to bring the perfect cup - from
                    bean to brew - in every shipment.
                </HeroText>
            </HeroContent>
        </HeroWrapper>
    );
}

export default Hero;
