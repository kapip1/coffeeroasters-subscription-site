import React from 'react';

import styled from 'styled-components';

import Collenction from './Collenction';

const MainWrapper = styled.main`
    display: flex;
    flex-direction: column;
`;

function Main() {
    return (
        <MainWrapper>
            <Collenction />
        </MainWrapper>
    );
}

export default Main;
