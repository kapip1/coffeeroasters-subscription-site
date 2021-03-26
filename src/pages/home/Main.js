import React from 'react';

import styled from 'styled-components';

import Collenction from './Collenction';
import Whyus from './Whyus';
import HowItWorks from './HowItWorks';

const MainWrapper = styled.main`
    display: flex;
    flex-direction: column;
`;

function Main() {
    return (
        <MainWrapper>
            <Collenction />
            <Whyus />
            <HowItWorks />
        </MainWrapper>
    );
}

export default Main;
