import React from 'react';

import styled from 'styled-components';

import Header from './Header';
import Main from './Main';
import Footer from '../../components/Footer';

const HomeWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

function Home() {
    return (
        <HomeWrapper>
            <Header />
            <Main />
            <Footer />
        </HomeWrapper>
    );
}

export default Home;
