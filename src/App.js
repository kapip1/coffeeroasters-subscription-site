import styled from 'styled-components';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import About from './pages/about/About';
import AppProvider from './AppContext';
import GlobalStyle from './styles/GlobalStyle';
import Nav from './components/Nav';
import Home from './pages/home/Home';

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
                    <Switch>
                        <Route path='/' exact component={Home} />
                        <Route path='/aboutus' component={About} />
                    </Switch>
                </Wrapper>
            </AppProvider>
        </Router>
    );
}

export default App;
