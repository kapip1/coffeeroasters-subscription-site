import React from 'react';

import styled from 'styled-components';

import commitmentBg from '../../assets/about/desktop/image-commitment.jpg';

const CommitmentWrapper = styled.div`
    display: flex;
    width: 90%;
    margin: 50px auto;
    justify-content: space-around;
    @media (max-width: 1150px) {
        justify-content: space-between;
    }
    @media (max-width: 750px) {
        flex-direction: column;
        width: 100%;
    }
`;

const CommitmentImage = styled.div`
    background: url(${commitmentBg}) no-repeat;
    background-size: cover;
    border-radius: 12px;
    height: 520px;
    width: 40%;
    max-width: 445px;
    margin-top: 50px;
    @media (max-width: 750px) {
        width: 100%;
        height: 400px;
    }
`;
const CommitmentContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    max-width: 540px;
    justify-content: center;
    @media (max-width: 1150px) {
        max-width: 339px;
    }
    @media (max-width: 750px) {
        width: 100%;
        text-align: center;
        margin-top: 55px;
    }
`;

const CommitmentTitle = styled.span`
    font-family: 'Fraunces', serif;
    font-size: 4rem;
    font-weight: 700;
    @media (max-width: 1150px) {
        font-size: 3.2rem;
    }
`;

const CommitmentText = styled.p`
    margin-top: 30px;
    font-size: 1.6rem;
    color: hsl(215, 5%, 54%);
    @media (max-width: 1150px) {
        font-size: 1.5rem;
    }
`;

function Commitment() {
    return (
        <CommitmentWrapper>
            <CommitmentImage />
            <CommitmentContent>
                <CommitmentTitle>Our commitment</CommitmentTitle>
                <CommitmentText>
                    We’re built on a simple mission and a commitment to doing
                    good along the way. We want to make it easy for you to
                    discover and brew the world’s best coffee at home. It all
                    starts at the source. To locate the specific lots we want to
                    purchase, we travel nearly 60 days a year trying to
                    understand the challenges and opportunities in each of these
                    places. We collaborate with exceptional coffee growers and
                    empower a global community of farmers through with well
                    above fair-trade benchmarks. We also offer training, support
                    farm community initiatives, and invest in coffee plant
                    science. Curating only the finest blends, we roast each lot
                    to highlight tasting profiles distinctive to their native
                    growing region.
                </CommitmentText>
            </CommitmentContent>
        </CommitmentWrapper>
    );
}

export default Commitment;
