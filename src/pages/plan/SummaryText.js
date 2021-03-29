import React, { useContext } from 'react';

import styled from 'styled-components';

import { AppContext } from '../../AppContext';

const SummaryTextWrapper = styled.p`
    margin-top: 15px;
    font-weight: 700;
    color: inherit;
    font-family: 'Fraunces', serif;
    font-size: 2.4rem;
`;
const SummaryGap = styled.span`
    color: hsl(179, 81%, 29%);
`;
function SummaryText() {
    const { preferences, bean, quantity, grind, deliveries } = useContext(
        AppContext
    );

    const isCapsule = preferences.option === 1 ? 'as' : 'using';
    const preferencesText = preferences.option ? preferences.name : '______ ';
    const optionText = bean.option ? bean.name : ' ______';
    const quantityText = quantity.option ? quantity.name : '______ ';
    const grindText = grind.option ? grind.name : ' ______';
    return (
        <SummaryTextWrapper>
            “I drink my coffee {isCapsule}{' '}
            <SummaryGap>{preferencesText}</SummaryGap>, with a{' '}
            <SummaryGap>{optionText} </SummaryGap> type of bean.
            <SummaryGap> {quantityText} </SummaryGap>
            {preferences.option === 1 ? (
                ''
            ) : (
                <>
                    {' '}
                    ground ala <SummaryGap>{grindText}</SummaryGap>
                </>
            )}
            , sent to me{' '}
            <SummaryGap>
                {deliveries.option ? deliveries.name : '______'}
            </SummaryGap>
            .”
        </SummaryTextWrapper>
    );
}

export default SummaryText;
