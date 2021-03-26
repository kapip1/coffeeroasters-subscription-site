import styled from 'styled-components';

import { BrowserRouter as Router } from 'react-router-dom';

import AppProvider from './AppContext';
import GlobalStyle from './styles/GlobalStyle';
import Home from './pages/home/Home';
import Nav from './components/Nav';

function App() {
    const Wrapper = styled.div`
        display: flex;
        flex-direction: column;
        padding: 40px 310px 100px 310px;
        @media (max-width: 1650px) {
            padding: 40px 25px 40px 25px;
        }
    `;

    return (
        <Router>
            <AppProvider>
                <Wrapper>
                    <GlobalStyle />
                    <Nav />
                    <Home />
                </Wrapper>
            </AppProvider>
        </Router>
    );
}

export default App;
