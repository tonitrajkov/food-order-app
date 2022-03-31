import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { HubConnectionBuilder, LogLevel } from '@aspnet/signalr';

import { currencyFormat } from '../../helpers/currency-format';
import { removeOrderItem, toggleOrderStatusMenu, loadOrder } from '../../actions/orderActions';
import OrderItem from './components/order-item';

import {
    OrderStatusMenu, OrderStatusMenuContainer, OrderStatusMenuHeader, OrderStatusMenuBody, OrderStatusMenuFooter,
    OrderStatusMenuTitle, OrderStatusMenuHideSpan, TextWrapperCentered, OrderStatusMenuEmptyCart, OrderStatusMenuEmptyCartImg,
    OrderStatusMenuFooterContainer, OrderStatusMenuFooterPriceContainer, OrderStatusMenuFooterCheckoutBtn,
    BlockTitle, BlockDescription, OrderStatusMenuFooterTotal, OrderStatusMenuFooterPrice
} from '../../components/styles/style';

const userId = localStorage.getItem('userIdentity')
export class OrderStatus extends Component {
    state = {
        quantity: 1,
        note: '',
        hubConnection: null,
        message: '',
        messages: []
    };

    componentDidMount() {
        let orderId = localStorage.getItem('orderId');
        if (!!userId && !!orderId) {
            this.props.loadOrder(userId, orderId);
        }

        const hubConnection = new HubConnectionBuilder()
            .withUrl('https://localhost:44380/messages')
            .configureLogging(LogLevel.Information)
            .build();

        hubConnection.start()
            .catch(err => console.log('Error while establishing'));

        this.setState({ hubConnection });

        hubConnection.on('ReceiveMessage', (message) => {
            this.setState({ message });
            console.log(message);
        });
    }

    onNoteChange = (event) => {
        this.setState({ note: event.target.value });
    }

    onRemoveItemClick = (orderitem) => {
        this.props.removeOrderItem(this.props.order.orderId, orderitem);
    }

    onCheckoutClick = () => {
        // console.log(this.props.router)
        // this.props.history.push(`/payment/1`);
        this.state.hubConnection.invoke('SendMessageToAll', 'test msg')
            .catch(err => console.error(err));
    }

    render() {

        return (
            <OrderStatusMenu open={this.props.isOrderMenuOpen}>
                <OrderStatusMenuContainer hide={this.props.isOrderMenuOpen}>
                    <OrderStatusMenuHeader>
                        <OrderStatusMenuTitle>Order Status</OrderStatusMenuTitle>
                        <OrderStatusMenuHideSpan onClick={() => this.props.toggleOrderStatusMenu()}>Hide &#10230;</OrderStatusMenuHideSpan>
                    </OrderStatusMenuHeader>

                    <OrderStatusMenuBody>
                        {this.props.order ? (

                            <div>
                                {this.props.order.orderItems.map(orderItem => {
                                    return (
                                        <OrderItem key={orderItem.orderItemId} orderItem={orderItem} onRemoveClick={this.onRemoveItemClick} />
                                    )
                                })}
                            </div>
                        ) : (
                                <OrderStatusMenuEmptyCart>
                                    <OrderStatusMenuEmptyCartImg />
                                    <TextWrapperCentered>
                                        <BlockTitle>Your cart is empty</BlockTitle>
                                        <BlockDescription>Looks like you haven added anything to your cart yet</BlockDescription>
                                    </TextWrapperCentered>
                                </OrderStatusMenuEmptyCart>
                            )}

                        <button onClick={() => this.onCheckoutClick()}>Send Text</button>
                        <span>{this.state.message}</span>
                    </OrderStatusMenuBody>

                    {this.props.order ? (
                        <OrderStatusMenuFooter>
                            <OrderStatusMenuFooterContainer>
                                <OrderStatusMenuFooterPriceContainer>
                                    <OrderStatusMenuFooterTotal>Total</OrderStatusMenuFooterTotal>
                                    <OrderStatusMenuFooterPrice>{currencyFormat(this.props.order.totalPrice)}</OrderStatusMenuFooterPrice>
                                </OrderStatusMenuFooterPriceContainer>

                                <OrderStatusMenuFooterCheckoutBtn>
                                    <NavLink to={'/payment/' + this.props.order.orderId}>Checkout</NavLink>
                                </OrderStatusMenuFooterCheckoutBtn>
                            </OrderStatusMenuFooterContainer>
                        </OrderStatusMenuFooter>
                    ) : (null)}

                </OrderStatusMenuContainer>
            </OrderStatusMenu>
        );
    };
};

OrderStatus.propTypes = {
    router: PropTypes.object,
    order: PropTypes.object,
    isOrderMenuOpen: PropTypes.bool,
    removeOrderItem: PropTypes.func,
    toggleOrderStatusMenu: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        order: state.order.order,
        isOrderMenuOpen: state.order.isOrderMenuOpen
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        removeOrderItem: (orderId, orderItem) => { dispatch(removeOrderItem(orderId, orderItem)) },
        toggleOrderStatusMenu: () => { dispatch(toggleOrderStatusMenu()) },
        loadOrder: (userId, orderId) => { dispatch(loadOrder(userId, orderId)) }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderStatus);