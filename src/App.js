import React, { useContext } from 'react';

import styled, { css } from 'styled-components';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { AppContext } from './AppContext';
import About from './pages/about/About';
import GlobalStyle from './styles/GlobalStyle';
import Plan from './pages/plan/Plan';
import Nav from './components/Nav';
import Home from './pages/home/Home';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    ${({ isOpen }) =>
        isOpen &&
        css`
            height: 100vh;
            overflow: hidden;
        `}
    padding: 40px 310px 100px 310px;
    @media (max-width: 1650px) {
        padding: 40px 25px 40px 25px;
    }
`;
function App() {
    const { isOpen } = useContext(AppContext);

    return (
        <Router>
            <Wrapper isOpen={isOpen}>
                <GlobalStyle />
                <Nav />
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/aboutus' component={About} />
                    <Route path='/create-your-plan' component={Plan} />
                </Switch>
            </Wrapper>
        </Router>
    );
}

export default App;
