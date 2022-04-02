// import React from 'react';
import styled from 'styled-components';
import * as theme from '../../constants/theme';
import img from '../../assets/images/empty-cart.png';
import foodAvatar from '../../assets/images/food-avatar.png';

const ListStyle = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
`;

export const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

export const MainBody = styled.div`
    display: flex;
    flex-direction: row;
    min-height: 100vh;
`;

export const MainContent = styled.main`
    flex: 1;
    padding: 15px 30px;
`;

export const MainNav = styled.nav`
    flex: 0 0 23%;
    background-color: ${theme.color.base.yellow};
    padding: 20px 25px;
    text-transform: uppercase;
    font-weight: 600;
`;

export const TextWrapperCentered = styled.div`
    text-align: center;
`;

/* --- Navbar Style --- */
export const NavbarList = styled(ListStyle)`
    padding-top: 10px;
`;

export const NavbarListItem = styled.li`
    padding: 10px 15px;

    &.active {
        cursor: default;
        position: relative;

        &::before {
            content: "";
            width: 65px;
            height: 65px;
            position: absolute;
            left: -35px;
            top: -5px;
            background-color: ${theme.color.base.white};
            border-radius: 50%;
            opacity: .7;
        }

        & span::before {
            content: "";
            display: inline-block;
            border-top: 2.5px solid  ${theme.color.base.dark};
            width: 40px;
            margin-right: 20px;
            transform: translateY(-5px);
        }
    }

    &:hover {
        cursor: pointer;
        opacity: .7;
    }
`;


/* --- Header Style --- */
export const HeaderBody = styled(MainBody)`
    min-height: 80px;
`;

export const LogoContainer = styled.div`
    flex: 0 0 23%;
    padding: 15px 30px;
    background-color: ${theme.color.base.yellow};
    position: relative;

    a {
        text-decoration: none;
    }

    h1 {
        padding-left: 25px;
        color: ${theme.color.font.dark};
    }
`;

export const LogoFakeCover = styled.div`
    width: 150px;
    height: 180px;
    background-color: #fff;
    border-radius: 50%;
    position: absolute;
    top: -70px;
    left: 1px;
    opacity: .3;
    transform: rotate(120deg);

    &:hover {
        opacity: .2;
    }
`;

export const HeaderMenuContainer = styled.div`
    flex: 1;
    padding: 15px 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const HeaderMenuList = styled(ListStyle)`
    color: ${theme.color.font.dark};

    a {
        color: ${theme.color.font.dark};
        text-transform: uppercase;
        text-decoration: none;
        padding-right: 15px;
        font-weight: 500;

        &.active {
            color: ${theme.color.base.red};
        }
    }

    a:last-child {
        padding-right: 0px;
    }
`;

export const OrderStatusContainer = styled.div`
    display: flex;
    align-items: center;
    color: ${theme.color.font.dark};
    position: relative;
    cursor: pointer;

    i {
        z-index: 1;
    }
`;

export const Badge = styled.span`
    font-size: ${theme.fontSize.sm12};
    font-weight: 600;
    text-align: center;
    line-height: 22px;
    background-color: ${theme.color.base.red};
    color: ${theme.color.base.white};
    width: 22px;
    height: 22px;
    border-radius: 50%;
    margin-left: 10px;
    display: block;
`;

export const CircleHolder = styled.span`
    &::before {
        content: "";
        width: 65px;
        height: 65px;
        position: absolute;
        left: -24px;
        top: -20px;
        background-color: ${theme.color.base.yellow};
        border-radius: 50%;
    }
`;

/* --- Products Style --- */
export const ProductsBody = styled(MainBody)`
    flex-wrap: wrap;
    min-height: 300px;
    padding-top: 35px;
`;

export const ProductCard = styled.div`
    padding: 50px 60px;
    width: 32%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ProductCardImgContainer = styled.div`
    background: url(${foodAvatar}) no-repeat;
    background-size: contain;
    border: 1px solid #dfdfdf;
    border-radius: 50%;
    width: 240px;
    height: 240px;
    position: relative;

    img {
        width: 240px;
        height: 240px;
        border-radius: 50%;
    }
`;

export const ProductCardAddToCartBtn = styled.a`
    color: ${theme.color.base.white} !important;
    background-color: ${theme.color.base.red};
    width: 50px;
    height: 50px;
    border-radius: 50%;
    font-size: ${theme.fontSize.xlg30};

    position: absolute;
    bottom: -20px;
    right: 40%;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        cursor: pointer;
        opacity: .9;
    }
`;

export const ProductCardBody = styled.div`
    padding-top: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ProductCardPrice = styled.div`
    color: ${theme.color.base.darkGray};
    font-size: ${theme.fontSize.md18};
    text-align: center;
`;

export const ProductCardTitle = styled.div`
    color: ${theme.color.base.dark};
    font-size: ${theme.fontSize.lg24};
    font-weight: 700;
    text-align: center;
`;

export const ProductCardIngredient = styled.div`
    color: ${theme.color.base.gray};
    font-size: ${theme.fontSize.sm16};
    text-align: center;
`;

/* --- Product Details Style --- */
export const ProductDetailsBody = styled(MainBody)`
    min-height: 600px;
`;

export const ProductDetailsInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ProducDetailsImgContainer = styled.div`
    background: url(${foodAvatar}) no-repeat;
    background-size: contain;
    border: 1px solid #dfdfdf;
    width: 550px;
    height: 550px;
    margin-right: 40px;

    img {
        width: 550px;
        height: 550px;
        border-radius: 50%;
    }
`;

export const ProductInfoRow = styled.div`

    & + & {
        margin-top: 20px;
    }
`;

export const ProductIngredientContainer = styled.div`
 
    span {
        color: ${theme.color.font.dark};
        text-transform: uppercase;
        font-size: ${theme.fontSize.sm14};
        font-weight: 600;

        background-color: ${theme.color.base.lightGray};
        padding: 7px 18px;
        border-radius: 20px;
        margin-right: 5px;
        margin-bottom: 5px;
        display: inline-block;

        &.selected {
            background-color: ${theme.color.base.yellow};
        }

        &:hover {
            opacity: .8;
            cursor: pointer;
        }

        small {
            color: ${theme.color.base.darkGray};
            padding-left: 7px;
        }
    }
`;

export const ProductPriceContainer = styled.div`
    display: flex;
    padding-bottom: 15px;
    align-items: center;
`;

export const ProductPlaceOrderBtn = styled.a`
    text-transform: uppercase;
    font-size:  ${theme.fontSize.sm16};
    font-weight: 600;
    color:  ${theme.color.base.white} !important;
    background-color: ${theme.color.base.red};
    padding: 15px 25px;
    border-radius: 60px;
    letter-spacing: 1px;
    display: inline-block;

    &:hover {
        cursor: pointer;
        opacity: .8;
    }
`;


/* --- Quantity Input Component Style --- */
export const QuantityInputContainer = styled.div`
    display: inline-block;

    span {
        color: ${theme.color.font.dark};
        font-size: ${theme.fontSize.md20};
        background-color: ${theme.color.base.lightGray};
        display: inline-block;
        line-height: 34px;
        text-align: center;
        cursor: pointer;
        padding: 0 15px;

        &:first-child {
            border-radius: 25px 0 0 25px;
        }
    
        &:last-child {
            border-radius: 0 25px 25px 0;
        }

        &:not(:first-child):not(:last-child) {
            padding: 0;
            cursor: default;
            font-weight: 600;
        }

        &.disabled {
            cursor: default;
            opacity: .8;
        }
    }
`;


/* --- Order Status Component Style --- */
export const OrderStatusMenu = styled.div`
    background-color: ${theme.color.base.white};
    box-shadow: -2px 0 15px 0px ${theme.color.base.lightGray};
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
    transition: width 0.2s ease-in-out;
    z-index: 2;
    width:  ${({ open }) => open ? '350px' : '0'};
`;

export const OrderStatusMenuContainer = styled.div`
    display: ${({ hide }) => hide ? 'flex' : 'none'};
    transition: display 1s ease-in-out;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    height: 100vh;
`;

export const OrderStatusMenuHeader = styled.div`
    flex-grow: 0;
    flex-basis: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
`;

export const OrderStatusMenuBody = styled.div`
    flex: 1;
    padding: 1.5rem;
    overflow: auto;
`;

export const OrderStatusMenuFooter = styled.div`
    flex-grow: 0;
    background-color: ${theme.color.base.lightGray};
    border-top: 2px solid ${theme.color.border.gray};
`;

export const OrderStatusMenuFooterContainer = styled.div`
    padding: .8rem 1.5rem;
`;

export const OrderStatusMenuFooterPriceContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`;

export const OrderStatusMenuFooterCheckoutBtn = styled.div`
    a  {
        text-transform: uppercase;
        font-size:  ${theme.fontSize.sm16};
        font-weight: 600;
        color:  ${theme.color.base.white} !important;
        background-color: ${theme.color.base.red};
        padding: 10px;
        border-radius: 6px;
        letter-spacing: 1px;
        display: inline-block;
        width: 100%;
        text-align: center;

        &:hover {
            cursor: pointer;
            text-decoration:none;
            opacity: .9;
        }
}
`;

export const OrderStatusMenuEmptyCart = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const OrderStatusMenuEmptyCartImg = styled.div`
    background: url(${img}) no-repeat;
    background-size: contain;
    width: 250px;
    height: 250px;
    margin-bottom: 20px;
`;


/* --- Order Item Component Style --- */
export const OrderItemBody = styled.div`
    display: flex;
    align-items: flex-start;
    border-bottom: 1px solid ${theme.color.border.gray};
    padding-bottom: 15px;

    & + & {
        margin-top: 15px;
    }

    &::last-child {
        border-bottom: none;
    }
`;

export const OrderItemImgContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    span {
        position: absolute;
        top: -3px;
        left: -5px;
        margin-left: 0;
    }

    p {
        font-size: ${theme.fontSize.sm14};
    }

    small {
        font-size: 75%;
        padding-top: 7px;
        color: ${theme.color.base.red};
        
        &:hover {
            cursor: pointer;
            opacity: .8;
        }
    }
`;

export const OrderItemImg = styled.div`
    width: 45px;
    height: 45px;
    border-radius: 50%;

    img {
        width: 45px;
        height: 45px;
        border-radius: 50%;
    }
`;

export const OrderItemDetailsContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 0 8px;
`;
export const OrderItemPriceContainer = styled.div`
   span {
       font-size: ${theme.fontSize.md18};
       font-weight: 500;
   }
`;
