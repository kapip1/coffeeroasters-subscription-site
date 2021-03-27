import React from 'react';

import styled from 'styled-components';
import { Link } from 'react-router-dom';

import headerHeroDesktop from '../../assets/home/desktop/image-hero-coffeepress.jpg';
import headerHeroMobile from '../../assets/home/mobile/image-hero-coffeepress.jpg';
import headerHeroTablet from '../../assets/home/tablet/image-hero-coffeepress.jpg';

const HeaderWrapper = styled.header`
    display: flex;
    color: hsl(3, 78%, 98%);
    flex-direction: column;
    margin-top: 50px;
    background: url(${headerHeroDesktop}) center no-repeat;
    background-size: cover;
    border-radius: 12px;
    height: 600px;
    padding: 100px;
    align-items: flex-start;
    @media (max-width: 768px) {
        background: url(${headerHeroTablet}) center no-repeat;
        background-size: cover;
        padding: 100px 35px;
    }
    @media (max-width: 550px) {
        align-items: center;
        background: url(${headerHeroMobile}) center no-repeat;
        background-size: cover;
    }
`;
const HeroTitle = styled.h1`
    font-size: 7.2rem;
    font-family: 'Fraunces', serif;
    & span {
        display: block;
    }
    @media (max-width: 768px) {
        font-size: 3.5rem;
        text-align: center;
    }
`;
const HeroText = styled.p`
    margin-top: 30px;
    font-size: 1.6rem;
    color: hsl(215, 5%, 54%);
    max-width: 398px;
    width: 90%;
    @media (max-width: 768px) {
        text-align: center;
    }
`;
export const HeroButton = styled.button`
    font-family: 'Fraunces', serif;
    cursor: pointer;
    transition: 0.1s;
    width: 217px;
    margin-top: 50px;
    height: 56px;
    font-weight: 700;
    font-size: 1.8rem;
    color: inherit;
    border-radius: 10px;
    border: none;
    background-color: hsl(179, 81%, 29%);
    &:hover {
        background-color: #66d2cf;
    }
    & a {
        color: inherit;
        text-decoration: none;
        padding: 15px 32px;
    }
`;
const BR = styled.span`
    display: block;
`;

function Header() {
    return (
        <HeaderWrapper>
            <HeroTitle>
                Great coffe <BR /> made simple.
            </HeroTitle>
            <HeroText>
                Start your mornings with the world’s best coffees. Try our
                expertly curated artisan coffees from our best roasters
                delivered directly to your door, at your schedule.
            </HeroText>
            <HeroButton>
                <Link to='/create-your-plan'>Create your plan</Link>
            </HeroButton>
        </HeaderWrapper>
    );
}

export default Header;
