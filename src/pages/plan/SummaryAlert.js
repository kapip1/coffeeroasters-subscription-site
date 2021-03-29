import React, { useContext } from 'react';

import styled from 'styled-components';

import { AppContext } from '../../AppContext';
import { HeroButton } from '../home/Header';
import SummaryText from './SummaryText';

const SummaryAlertBg = styled.div`
    position: fixed;
    width: 100vw;
    z-index: 3;
    left: 0;
    top: 0;
    height: 100vh;
    background: black;
    opacity: 0.7;
`;
const SummaryAlertWrapper = styled.div`
    display: ${({ isAlert }) => (isAlert ? 'block' : 'none')};
`;

const SummaryTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 50%;
    left: 50%;
    border-radius: 14px;
    z-index: 7;
    transform: translate(-50%, -50%);
    width: 90%;
    color: hsl(215, 5%, 54%);
    max-width: 549px;
    height: 567px;
    background-color: hsl(43, 78%, 98%);
`;

const SummaryTitle = styled.span`
    display: flex;
    padding: 30px 50px;
    font-size: 4rem;
    align-items: center;
    font-weight: 700;
    background-color: hsl(215, 19%, 25%);
    height: 136px;
    border-radius: 14px 14px 0 0;
    font-family: 'Fraunces', serif;
    color: #fff;
    @media (max-width: 750px) {
        font-size: 2.8rem;
    }
`;
const SummaryContent = styled.div`
    padding: 30px 40px;
`;
const SummaryInfo = styled.p`
    display: flex;
    margin-top: 35px;
    font-size: 1.6rem;
`;
const SummaryCheckout = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 45px;
    @media (max-width: 750px) {
        justify-content: center;
    }
`;

const Price = styled.span`
    display: ${({ primary }) => (primary ? 'block' : 'none')};
    font-size: 3.2rem;
    align-items: center;
    font-weight: 700;
    color: hsl(215, 19%, 25%);
    @media (max-width: 750px) {
        display: ${({ primary }) => (primary ? 'none' : 'inline-block')};
        color: #fff;
        font-size: 1.6rem;
    }
`;

const CheckoutButton = styled(HeroButton)`
    color: #fff;
    margin: 0;
    display: inline-block;
`;

function SummaryAlert() {
    const { isAlert, handleIsAlert, price } = useContext(AppContext);

    return (
        <SummaryAlertWrapper isAlert={isAlert}>
            <SummaryAlertBg onClick={handleIsAlert} />
            <SummaryTextWrapper>
                <SummaryTitle>Order Summary</SummaryTitle>
                <SummaryContent>
                    <SummaryText />
                    <SummaryInfo>
                        Is this correct? You can proceed to checkout or go back
                        to plan selection if something is off. Subscription
                        discount codes can also be redeemed at the checkout.
                    </SummaryInfo>
                    <SummaryCheckout>
                        <Price primary>${price} / mo</Price>
                        <CheckoutButton>
                            Checkout <Price> - ${price} / mo</Price>
                        </CheckoutButton>
                    </SummaryCheckout>
                </SummaryContent>
            </SummaryTextWrapper>
        </SummaryAlertWrapper>
    );
}

export default SummaryAlert;
