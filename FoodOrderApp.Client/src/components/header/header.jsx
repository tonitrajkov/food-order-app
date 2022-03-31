import React from 'react';
import { useSelector, connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { toggleOrderStatusMenu } from '../../actions/orderActions';

import {
    HeaderBody, HeaderMenuContainer, LogoContainer,
    LogoFakeCover, HeaderMenuList, OrderStatusContainer,
    OrderStatus, Badge, CircleHolder
} from '../styles/style';

const Header = (props) => {
    const itemsCount = useSelector(state => state.order.items.length);
    return (
        <HeaderBody>
            <LogoContainer>
                <NavLink to='/'>
                    <LogoFakeCover />
                    <h1>F.</h1>
                </NavLink>
            </LogoContainer>

            <HeaderMenuContainer>
                <HeaderMenuList>
                    <NavLink to='/' exact activeClassName='active'>Menu</NavLink>
                    <NavLink to='/about' activeClassName="active">About</NavLink>
                    <NavLink to='/contact' activeClassName="active">Contact</NavLink>
                </HeaderMenuList>
                <OrderStatusContainer onClick={() => props.toggleOrderStatusMenu()}>
                    <CircleHolder />
                    <i className="fa fa-cart-arrow-down fa-style"></i>
                    <OrderStatus>Order status</OrderStatus>
                    <Badge>{itemsCount}</Badge>
                </OrderStatusContainer>
            </HeaderMenuContainer>
        </HeaderBody>
    );
};

const mapStateToProps = () => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleOrderStatusMenu: () => { dispatch(toggleOrderStatusMenu()) }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);