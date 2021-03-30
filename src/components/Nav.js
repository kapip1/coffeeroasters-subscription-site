import { useContext } from 'react';

import { Link } from 'react-router-dom';

import styled, { css } from 'styled-components';

import { AppContext } from '../AppContext';

import logoDesktop from '../assets/logo.svg';
import logoMobile from '../assets/logoMobile.svg';
import iconBurger from '../assets/shared/mobile/icon-hamburger.svg';
import iconClose from '../assets/shared/mobile/icon-close.svg';

const NavWrapper = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Logo = styled.div`
    background-image: url(${logoDesktop});
    z-index: 3;
    cursor: pointer;
    width: 236px;
    height: 26px;
    @media (max-width: 850px) {
        background-image: url(${logoMobile});
        position: absolute;
        transform: translateY(-55%);
        width: 163px;
        height: 18px;
    }
`;

const NavList = styled.ul`
    display: flex;
    opacity: 1;
    width: 300px;
    font-size: 1.2rem;
    font-weight: 700;
    text-transform: uppercase;
    justify-content: space-between;
    color: hsl(215, 5%, 54%);
    list-style: none;
    & li {
        cursor: pointer;
        & a {
            transition: 0.1s;
            text-decoration: none;
            color: inherit;
            &:hover {
                color: hsl(215, 19%, 25%);
            }
        }
    }
    @media (max-width: 850px) {
        visibility: hidden;
        opacity: 0;
        ${({ isOpen }) =>
            isOpen &&
            css`
                visibility: visible;
                opacity: 1;
            `}
        transition: 0.4s;
        position: absolute;
        height: 100vh;
        padding: 200px 0;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column-reverse;
        transform: translate(-50%, -50%) rotate(180deg);
        width: 100%;
        top: 50%;
        left: 50%;
        background: linear-gradient(
            180deg,
            rgba(254, 252, 247, 0.504981) 0%,
            #fefcf7 55.94%
        );
        & li {
            font-family: 'Fraunces', serif;
            color: hsl(215, 19%, 25%);
            margin-top: 25px;
            transform: rotate(180deg);
            font-size: 2.4rem;
        }
    }
`;

const Burger = styled.button`
    transition: 0.1s;
    display: none;
    border: none;
    @media (max-width: 850px) {
        z-index: 2;
        display: block;
        width: 16px;
        height: 15px;
        background: url(${({ isOpen }) => (isOpen ? iconClose : iconBurger)})
            no-repeat center;
    }
`;

function Nav() {
    const {
        isOpen,
        handleBurgerClick,
        handleNavClick,
        resetOptions,
    } = useContext(AppContext);

    return (
        <NavWrapper>
            <Link to='/' onClick={resetOptions}>
                <Logo onClick={handleNavClick} isOpen={isOpen} />
            </Link>
            <Burger isOpen={isOpen} onClick={handleBurgerClick} />
            <NavList isOpen={isOpen}>
                <li onClick={handleNavClick}>
                    <Link to='/' onClick={resetOptions}>
                        home
                    </Link>
                </li>
                <li onClick={handleNavClick}>
                    <Link to='/aboutus' onClick={resetOptions}>
                        about us
                    </Link>
                </li>
                <li onClick={handleNavClick}>
                    <Link to='/create-your-plan' onClick={resetOptions}>
                        create your plan
                    </Link>
                </li>
            </NavList>
        </NavWrapper>
    );
}

export default Nav;
