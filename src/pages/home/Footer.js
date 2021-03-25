import React from 'react';

import { Link } from 'react-router-dom';
import styled from 'styled-components';

import logoFooter from '../../assets/logoFooter.svg';

import facebookIcon from '../../assets/shared/desktop/icon-facebook.svg';
import instagramIcon from '../../assets/shared/desktop/icon-instagram.svg';
import twitterIcon from '../../assets/shared/desktop/icon-twitter.svg';

const FooterWrapper = styled.footer`
    display: flex;
    background-color: hsl(215, 19%, 25%);
    border-radius: 12px;
    padding: 40px;
    justify-content: space-between;
`;

const FooterLogo = styled.div`
    background-image: url(${logoFooter});
    cursor: pointer;
    z-index: 2;
    width: 236px;
    height: 26px;
`;

const FooterNav = styled.nav`
    display: flex;
`;

const FooterSocials = styled.ul`
    display: flex;
    justify-content: space-between;
    list-style: none;
    width: 120px;
`;
const FooterSocial = styled.li`
    background: url(${({ image }) => image}) no-repeat;
    width: 24px;
    height: 24px;
    cursor: pointer;
`;
const FooterNavList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 283px;
    list-style: none;
    font-size: 1.2rem;
    text-transform: uppercase;
    & a {
        text-decoration: none;
        color: hsl(215, 5%, 54%);
    }
`;

function Footer() {
    return (
        <FooterWrapper>
            <FooterNav>
                <FooterLogo />
                <FooterNavList>
                    <li>
                        <Link to='/'>home</Link>
                    </li>
                    <li>
                        <Link to='/aboutus'>about us</Link>
                    </li>
                    <li>
                        <Link to='/create-your-plan'>create your plan</Link>
                    </li>
                </FooterNavList>
            </FooterNav>
            <FooterSocials>
                <FooterSocial image={facebookIcon} />
                <FooterSocial image={twitterIcon} />
                <FooterSocial image={instagramIcon} />
            </FooterSocials>
        </FooterWrapper>
    );
}

export default Footer;
