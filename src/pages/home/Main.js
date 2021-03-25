import React from 'react';

import styled from 'styled-components';

import Collenction from './Collenction';
import Whyus from './Whyus';

const MainWrapper = styled.main`
    display: flex;
    flex-direction: column;
`;

function Main() {
    return (
        <MainWrapper>
            <Collenction />
            <Whyus />
        </MainWrapper>
    );
}

export default Main;
