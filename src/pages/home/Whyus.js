import React from 'react';

import styled from 'styled-components';

import coffeBeanIcon from '../../assets/home/desktop/icon-coffee-bean.svg';
import giftIcon from '../../assets/home/desktop/icon-gift.svg';
import truckIcon from '../../assets/home/desktop/icon-truck.svg';

const WhyusWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 120px 40px 0 40px;
`;
const WhyusBg = styled.div`
    position: absolute;
    z-index: -1;
    border-radius: 12px;
    top: 0;
    left: 0;
    width: 100%;
    height: 557px;
    background-color: hsl(215, 19%, 25%);
`;
const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    font-size: 1.6rem;
`;

const ContentTitle = styled.span`
    font-size: 4rem;
    font-weight: 700;
    font-family: 'Fraunces', serif;
    color: hsl(43, 78%, 98%);
    margin-bottom: 25px;
`;
const BR = styled.span`
    display: block;
`;

const ContentText = styled.p`
    color: hsl(215, 5%, 54%);
    line-height: 24px;
`;

const BenefitsWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 50px;
    @media (max-width: 1100px) {
        flex-direction: column;
        align-items: center;
    }
`;
const Benefit = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    width: 360px;
    padding: 20px;
    margin-bottom: 30px;
    height: 382px;
    border-radius: 12px;
    background-color: hsl(179, 81%, 29%);
    @media (max-width: 1100px) {
        flex-direction: row;
        padding: 20px 50px 20px 50px;
        width: 573px;
        height: 180px;
    }
    @media (max-width: 750px) {
        flex-direction: column;
        padding: 20px;
        height: 382px;
        width: 279px;
    }
`;

const BenefitContent = styled.div`
    text-align: center;
    color: hsl(43, 78%, 98%);
    @media (max-width: 1100px) {
        text-align: start;
        margin-left: 30px;
    }
`;

const BenefitTitle = styled.span`
    font-size: 2.4rem;
    font-family: 'Fraunces', serif;
    font-weight: 700;
`;

const BenefitText = styled.p`
    font-size: 1.5rem;
    margin-top: 20px;
`;

const ImageWrapper = styled.div`
    width: 75px;
    & img {
        width: 100%;
    }
    @media (max-width: 110px) {
        width: 52px;
    }
`;

function Whyus() {
    return (
        <WhyusWrapper>
            <WhyusBg />
            <ContentWrapper>
                <ContentTitle>Why choose us?</ContentTitle>
                <ContentText>
                    A large part of our role is choosing which particular
                    coffees will be featured <BR />
                    in our range. This means working closely with the best
                    coffee growers to give
                    <BR /> you a more impactful experience on every level.
                </ContentText>
            </ContentWrapper>
            <BenefitsWrapper>
                <Benefit>
                    <ImageWrapper>
                        <img src={coffeBeanIcon} alt='coffe bean icon' />
                    </ImageWrapper>
                    <BenefitContent>
                        <BenefitTitle>Best quality</BenefitTitle>
                        <BenefitText>
                            Discover an endless variety of the world’s best
                            artisan coffee from each of our roasters.
                        </BenefitText>
                    </BenefitContent>
                </Benefit>
                <Benefit>
                    <ImageWrapper>
                        <img src={giftIcon} alt='gift icon' />
                    </ImageWrapper>
                    <BenefitContent>
                        <BenefitTitle>Exclusive benefits</BenefitTitle>
                        <BenefitText>
                            Special offers and swag when you subscribe,
                            including 30% off your first shipment.
                        </BenefitText>
                    </BenefitContent>
                </Benefit>
                <Benefit>
                    <ImageWrapper>
                        <img src={truckIcon} alt='truck icon' />
                    </ImageWrapper>
                    <BenefitContent>
                        <BenefitTitle>Free shipping</BenefitTitle>
                        <BenefitText>
                            We cover the cost and coffee is delivered fast. Peak
                            freshness: guaranteed.
                        </BenefitText>
                    </BenefitContent>
                </Benefit>
            </BenefitsWrapper>
        </WhyusWrapper>
    );
}

export default Whyus;
