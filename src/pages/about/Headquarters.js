import React from 'react';

import styled from 'styled-components';

//countiers
import ukImg from '../../assets/about/desktop/illustration-uk.svg';
import caImg from '../../assets/about/desktop/illustration-canada.svg';
import auImg from '../../assets/about/desktop/illustration-australia.svg';

const HeadquartersWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 85%;
    margin: 150px 40px;
    @media (max-width: 750px) {
        width: 100%;
        text-align: center;
        margin: 150px 0;
    }
`;

const HeadquartersTitle = styled.span`
    font-size: 2.4rem;
    font-family: 'Fraunces', serif;
    font-weight: 700;
    color: hsl(215, 5%, 54%);
    margin-bottom: 30px;
`;

const HeadquartersList = styled.ul`
    display: flex;
    justify-content: space-between;
    list-style: none;
    @media (max-width: 750px) {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
`;

const HeadquartersItem = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 262px;
    @media (max-width: 750px) {
        align-items: center;
        margin-top: 30px;
    }
`;

const HeadquartersItemTitle = styled.span`
    font-size: 3.2rem;
    color: hsl(215, 19%, 25%);
    font-family: 'Fraunces', serif;
    font-weight: 700;
`;

const HeadquartersAddress = styled.p`
    font-size: 1.6rem;
    color: hsl(215, 19%, 25%);
`;

const HeadquartersImg = styled.div`
    background: url(${({ img }) => img}) no-repeat;
    height: 55px;
    width: 55px;
`;

const BR = styled.span`
    display: block;
`;

function Headquarters() {
    return (
        <HeadquartersWrapper>
            <HeadquartersTitle>Our headquarters</HeadquartersTitle>
            <HeadquartersList>
                <HeadquartersItem>
                    <HeadquartersImg img={ukImg} />
                    <HeadquartersItemTitle>
                        United Kingdom
                    </HeadquartersItemTitle>
                    <HeadquartersAddress>
                        68 Asfordby Rd <BR />
                        Alcaston
                        <BR />
                        SY6 1YA
                        <BR />
                        +44 1241 918425
                        <BR />
                    </HeadquartersAddress>
                </HeadquartersItem>
                <HeadquartersItem>
                    <HeadquartersImg img={caImg} />
                    <HeadquartersItemTitle>Canada</HeadquartersItemTitle>
                    <HeadquartersAddress>
                        1528 Eglinton Avenue <BR />
                        Toronto
                        <BR />
                        Ontario M4P 1A6
                        <BR />
                        +1 416 485 2997
                        <BR />
                    </HeadquartersAddress>
                </HeadquartersItem>
                <HeadquartersItem>
                    <HeadquartersImg img={auImg} />
                    <HeadquartersItemTitle>Australia</HeadquartersItemTitle>
                    <HeadquartersAddress>
                        36 Swanston Street
                        <BR />
                        Kewell
                        <BR />
                        Victoria
                        <BR />
                        +61 4 9928 3629
                        <BR />
                    </HeadquartersAddress>
                </HeadquartersItem>
            </HeadquartersList>
        </HeadquartersWrapper>
    );
}

export default Headquarters;
