import React, { useContext } from 'react';

import styled, { css } from 'styled-components';

import { AppContext } from '../../AppContext';

import Header from './Header';
import Main from './Main';
import Footer from '../../components/Footer';

const HomeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    ${({ isOpen }) =>
        isOpen &&
        css`
            height: 80vh;
            overflow-y: hidden;
        `}
`;

function Home() {
    const { isOpen } = useContext(AppContext);

    return (
        <HomeWrapper isOpen={isOpen}>
            <Header />
            <Main />
            <Footer />
        </HomeWrapper>
    );
}

export default Home;
