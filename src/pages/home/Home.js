import React from 'react';

import styled from 'styled-components';

import Header from './Header';
import Main from './Main';

const HomeWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

function Home() {
    return (
        <HomeWrapper>
            <Header />
            <Main />
        </HomeWrapper>
    );
}

export default Home;
