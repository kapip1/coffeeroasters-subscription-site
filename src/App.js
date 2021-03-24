import styled from 'styled-components';

import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyle from './styles/GlobalStyle';
import Home from './pages/home/Home';
import Nav from './components/Nav';

function App() {
    const Wrapper = styled.div`
        display: flex;
        flex-direction: column;
        padding: 40px 310px 100px 310px;
        min-height: 250vh;
        @media (max-width: 1650px) {
            padding: 40px 25px 40px 25px;
        }
    `;

    return (
        <Router>
            <Wrapper>
                <GlobalStyle />
                <Nav />
                <Home />
            </Wrapper>
        </Router>
    );
}

export default App;
