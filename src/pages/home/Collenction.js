import React from 'react';

import styled from 'styled-components';

import productsbgDesktop from '../../assets/productsbgDesktop.svg';
import productsbgMobile from '../../assets/productsbgMobile.svg';
import productsbgTablet from '../../assets/productsbgTablet.svg';

//coffee options
import dancheDesktop from '../../assets/home/desktop/image-danche.png';
import espressoDesktop from '../../assets/home/desktop/image-gran-espresso.png';
import planaltoDesktop from '../../assets/home/desktop/image-planalto.png';
import piccolloDesktop from '../../assets/home/desktop/image-piccollo.png';

const MainWrapper = styled.div`
    display: flex;
    background: url(${productsbgDesktop}) top center no-repeat;
    width: 100%;
    justify-content: center;
    margin: auto;
    background-repeat: no-repeat;
    min-height: 525px;
    @media (max-width: 1100px) {
        background: url(${productsbgTablet}) top center no-repeat;
    }
    @media (max-width: 750px) {
        background: url(${productsbgMobile}) top center no-repeat;
    }
`;
const ProductsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 150px;
    @media (max-width: 1100px) {
        flex-direction: column;
        margin-top: 100px;
    }
`;
const Product = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    align-items: center;
    & p {
        margin-top: 15px;
        text-align: center;
        color: hsl(215, 19%, 25%);
    }
    @media (max-width: 1100px) {
        flex-direction: row;
    }
    @media (max-width: 750px) {
        flex-direction: column;
    }
`;
const ProductImage = styled.div`
    width: 256px;
    & img {
        width: 100%;
    }
`;
const ProductTexts = styled.div`
    text-align: center;
`;
const ProductContent = styled.p`
    font-size: 1.6rem;
`;
const ProductTitle = styled.span`
    font-family: 'Fraunces', serif;
    font-size: 2.4rem;
    font-weight: 700;
`;
const BR = styled.span`
    display: block;
`;

function Collection() {
    return (
        <MainWrapper>
            <ProductsWrapper>
                <Product>
                    <ProductImage>
                        <img src={espressoDesktop} alt='' />
                    </ProductImage>
                    <ProductTexts>
                        <ProductTitle>Gran Espresso</ProductTitle>
                        <ProductContent>
                            Light and flavorful blend with cocoa <BR />
                            and black pepper for an intense <BR />
                            experience
                        </ProductContent>
                    </ProductTexts>
                </Product>
                <Product>
                    <ProductImage>
                        <img src={planaltoDesktop} alt='' />
                    </ProductImage>
                    <ProductTexts>
                        <ProductTitle>Planalto</ProductTitle>
                        <ProductContent>
                            Brazilian dark roast with rich and <BR />
                            velvety body, and hints of fruits and <BR />
                            nuts
                        </ProductContent>
                    </ProductTexts>
                </Product>
                <Product>
                    <ProductImage>
                        <img src={piccolloDesktop} alt='' />
                    </ProductImage>
                    <ProductTexts>
                        <ProductTitle>Piccollo</ProductTitle>
                        <ProductContent>
                            Mild and smooth blend featuring
                            <BR /> notes of toasted almond and dried <BR />
                            cherry
                        </ProductContent>
                    </ProductTexts>
                </Product>
                <Product>
                    <ProductImage>
                        <img src={dancheDesktop} alt='' />
                    </ProductImage>
                    <ProductTexts>
                        <ProductTitle>Danche</ProductTitle>
                        <ProductContent>
                            Ethiopian hand-harvested blend
                            <BR /> densely packed with vibrant fruit
                            <BR /> notes
                        </ProductContent>
                    </ProductTexts>
                </Product>
            </ProductsWrapper>
        </MainWrapper>
    );
}

export default Collection;
