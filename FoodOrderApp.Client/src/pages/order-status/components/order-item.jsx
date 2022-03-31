import React from 'react'

import { currencyFormat } from '../../../helpers/currency-format';
import {
    OrderItemBody, OrderItemImg, OrderItemDetailsContainer, OrderItemImgContainer, OrderItemPriceContainer,
    Badge, OrderItemTitle, OrderItemIngredientTitle, OrderItemNote
} from '../../../components/styles/style';

const OrderItem = ({ orderItem, onRemoveClick }) => {
    return (
        <OrderItemBody>
            <OrderItemImgContainer>
                <Badge>{orderItem.quantity}</Badge>
                <OrderItemImg>
                    <img src={orderItem.product.image} alt='' />
                </OrderItemImg>
                <small onClick={() => onRemoveClick(orderItem)}>Remove</small>
            </OrderItemImgContainer>

            <OrderItemDetailsContainer>
                <OrderItemTitle>{orderItem.product.name}</OrderItemTitle>
                {orderItem.ingredients && orderItem.ingredients.map(ingredient => {
                    return (
                        <OrderItemIngredientTitle key={ingredient.ingredientId}>
                            {ingredient.name}
                        </OrderItemIngredientTitle>
                    )
                })}

                <OrderItemNote>{orderItem.note}</OrderItemNote>
            </OrderItemDetailsContainer>
            <OrderItemPriceContainer>
                <span>{currencyFormat(orderItem.totalPrice)}</span>
            </OrderItemPriceContainer>
        </OrderItemBody>
    );
};

export default OrderItem;