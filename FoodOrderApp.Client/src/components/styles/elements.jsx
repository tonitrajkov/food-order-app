import styled from 'styled-components';
import * as theme from '../../constants/theme';

const SpanUppercaseBase = styled.span`
    text-transform: uppercase; 
    color: ${theme.color.font.dark};
`;

const TextareaBase = styled.textarea`
    width: 100%;
    padding: 5px 10px;
    border: 1px solid ${theme.color.base.gray};
    border-radius: 5px;
    resize: none;
`;

export const PageTitle = styled.h1`
    color: ${theme.color.font.dark};
    font-size: ${theme.fontSize.lg28};
    font-weight: 900;
    letter-spacing: 1px;
`;

export const BlockTitle = styled.span`
    color: ${theme.color.base.dark};
    font-size: ${theme.fontSize.md20};
    font-weight: 700;
`;

export const BlockDescription = styled.div`
    color: ${theme.color.base.gray};
    font-size: ${theme.fontSize.sm16};
`;

export const CategoryTitle = styled(SpanUppercaseBase)`
    font-size: ${theme.fontSize.sm14};
    color: ${theme.color.base.darkYellow};
    font-weight: 600;
`;

export const CategoryName = styled(SpanUppercaseBase)`
    font-size: ${theme.fontSize.md18};
    font-weight: 600;
`;

export const OrderStatus = styled(SpanUppercaseBase)`
    font-size: ${theme.fontSize.sm16};
    font-weight: 600;
    word-spacing: 4px;
    letter-spacing: 1px;
    z-index: 1;
    margin-left: 10px;
`;

export const ProductTitle = styled(PageTitle)`
    font-size:  ${theme.fontSize.xlg30};    
`;

export const ProductIngredient = styled.h3`
    color: ${theme.color.base.gray};
    font-size: ${theme.fontSize.sm16};  
`;

export const ProductInfoTitle = styled(SpanUppercaseBase)`
    font-size: ${theme.fontSize.sm12};
    color: ${theme.color.base.gray};
    font-weight: 600;
    display: block;
    padding-bottom: 10px;
`;

export const ProductExtraInstTextarea = styled(TextareaBase)`
    min-height: 70px;
`;

export const ProductPriceSpan = styled.span`
    color: ${theme.color.font.dark};
    font-size: ${theme.fontSize.xlg30};
    margin-right: 20px;
`;

export const OrderStatusMenuTitle = styled(PageTitle)`
    font-size:  ${theme.fontSize.lg22};
    font-weight: 700; 
`;

export const OrderStatusMenuHideSpan = styled(SpanUppercaseBase)`
    font-size: ${theme.fontSize.sm16};
    font-weight: 600;
    word-spacing: 4px;
    letter-spacing: 1px;
    cursor: pointer;
`;

export const OrderStatusMenuFooterTotal = styled(BlockTitle)`
    font-size: ${theme.fontSize.lg24};
    font-weight: 500;
`;

export const OrderStatusMenuFooterPrice = styled(BlockTitle)`
    font-size: ${theme.fontSize.lg26};
`;

export const OrderItemTitle = styled.span`
    color: ${theme.color.base.dark};
    font-size: ${theme.fontSize.sm16};
    font-weight: 600;
    display: block;
    line-height: 1.2;
`;

export const OrderItemIngredientTitle = styled.small`
    color: ${theme.color.base.darkGray};
    line-height: 1.2;
    font-size: 80%;
`;

export const OrderItemNote = styled.span`
    font-size: ${theme.fontSize.sm14};
    padding-top: 10px;
    display: block;
`;

