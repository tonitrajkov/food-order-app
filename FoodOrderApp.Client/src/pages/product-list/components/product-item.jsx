import React from 'react'

import { currencyFormat } from '../../../helpers/currency-format';
import { 
    ProductCard, ProductCardImgContainer, ProductCardBody,
    ProductCardPrice, ProductCardTitle, ProductCardIngredient, ProductCardAddToCartBtn
} from '../../../components/styles/style';

const ProductItem = ({ product, onClick }) => {
    return (
        <ProductCard>
            <ProductCardImgContainer>
                <img src={product.image} alt='' />

                <ProductCardAddToCartBtn onClick={() => onClick(product)}>+</ProductCardAddToCartBtn>
            </ProductCardImgContainer>

            <ProductCardBody>
                <ProductCardPrice>{currencyFormat(product.price)}</ProductCardPrice>
                <ProductCardTitle>{product.name}</ProductCardTitle>
                <ProductCardIngredient>{product.ingredient}</ProductCardIngredient>
            </ProductCardBody>
        </ProductCard>
    );
};

export default ProductItem;