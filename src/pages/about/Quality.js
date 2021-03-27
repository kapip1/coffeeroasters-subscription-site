import React from 'react';

import qualityImageDesktop from '../../assets/about/desktop/image-quality.jpg';
import qualityImageMobile from '../../assets/about/mobile/image-quality.jpg';
import qualityImageTablet from '../../assets/about/tablet/image-quality.jpg';

import styled from 'styled-components';

const QualityWrapper = styled.div`
    display: flex;
    position: relative;
    height: 562px;
    margin: auto;
    margin-top: 100px;
    margin-bottom: 30px;
    @media (max-width: 1100px) {
        height: 688px;
    }
    @media (max-width: 750px) {
        height: 587px;
    }
`;

const QualityBg = styled.div`
    position: absolute;
    z-index: -1;
    border-radius: 12px;
    height: 77%;
    width: 100%;
    top: 23%;
    left: 0;
    background: hsl(215, 19%, 25%);
`;

const QualityContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
    @media (max-width: 1150px) {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
`;
const QualityContent = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 540px;
    @media (max-width: 650px) {
        width: 279px;
    }
`;

const QualityImage = styled.div`
    background-image: url(${qualityImageDesktop});
    border-radius: 12px;
    height: 474px;
    width: 445px;
    @media (max-width: 1100px) {
        width: 573px;
        height: 320px;
        background-image: url(${qualityImageTablet});
        order: -1;
    }
    @media (max-width: 650px) {
        width: 279px;
        height: 156px;
        background-image: url(${qualityImageMobile});
        background-size: cover;
    }
`;

const QualityTitle = styled.span`
    font-size: 4rem;
    font-weight: 700;
    color: hsl(43, 78%, 98%);
    margin-bottom: 30px;
    font-family: 'Fraunces', serif;
    @media (max-width: 1100px) {
        font-size: 3.2rem;
    }
    @media (max-width: 700px) {
        font-size: 2.8rem;
    }
`;

const QualityText = styled.p`
    font-size: 1.5rem;
    color: hsl(215, 5%, 54%);
    @media (max-width: 360px) {
        font-size: 1.2rem;
    }
`;

function Quality() {
    return (
        <QualityWrapper>
            <QualityBg />
            <QualityContainer>
                <QualityContent>
                    <QualityTitle>Uncompromising quality</QualityTitle>
                    <QualityText>
                        Although we work with growers who pay close attention to
                        all stages of harvest and processing, we employ, on our
                        end, a rigorous quality control program to avoid
                        over-roasting or baking the coffee dry. Every bag of
                        coffee is tagged with a roast date and batch number. Our
                        goal is to roast consistent, user-friendly coffee, so
                        that brewing is easy and enjoyable.
                    </QualityText>
                </QualityContent>
                <QualityImage />
            </QualityContainer>
        </QualityWrapper>
    );
}

export default Quality;
