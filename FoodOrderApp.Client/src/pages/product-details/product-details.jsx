import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { currencyFormat } from '../../helpers/currency-format';
import { loadProductDetails } from '../../actions/productActions';
import { addOrderItem } from '../../actions/orderActions';
import QuantityInput from './components/quantity-input';

import {
    ProductDetailsBody, ProducDetailsImgContainer, ProductDetailsInfoContainer, ProductInfoRow,
    ProductTitle, ProductIngredient, ProductInfoTitle, ProductIngredientContainer, ProductPriceContainer,
    ProductPlaceOrderBtn, ProductExtraInstTextarea, ProductPriceSpan
} from '../../components/styles/style';

export class ProductDetails extends Component {
    state = {
        quantity: 1,
        price: 0,
        ingredientsPrice: 0,
        ingredients: [],
        note: ''
    };

    componentDidMount() {
        let productId = this.props.match.params.id;
        if (!!productId) {
            this.props.loadProductDetails(productId);
        }
    }

    componentDidUpdate(prevProps) {
        // set item price on init
        if (prevProps.productDetails !== this.props.productDetails && !!this.props.productDetails.product) {
            this.setState({
                price: this.props.productDetails.product.price
            });
        }
    }

    onQuantityChange = (quantity) => {
        this.setState({ quantity: quantity });
        this.calculatePrice(quantity, this.state.ingredientsPrice);
    }

    toggleIngredient = (ingredient) => {
        let ingredientsPrice = 0;
        let selectedIngredients = [];

        if (ingredient.isSelected) {
            ingredientsPrice = this.state.ingredientsPrice - ingredient.price;
            selectedIngredients = this.state.ingredients.filter(item => item !== ingredient);
        }
        else {
            ingredientsPrice = this.state.ingredientsPrice + ingredient.price;
            selectedIngredients = [...this.state.ingredients, ingredient];
        }

        ingredient.isSelected = !ingredient.isSelected;

        this.setState({
            ingredientsPrice: ingredientsPrice,
            ingredients: selectedIngredients
        });
        this.calculatePrice(this.state.quantity, ingredientsPrice);
    }

    calculatePrice = (quantity, ingredientsPrice) => {
        let productPrice = this.props.productDetails.product.price;
        this.setState({
            price: (productPrice + ingredientsPrice) * quantity
        });
    }

    onNoteChange = (event) => {
        this.setState({ note: event.target.value });
    }

    onAddToCartClick = () => {
        let orderItem = {
            note: this.state.note,
            quantity: this.state.quantity,
            totalPrice: this.state.price,
            product: this.props.productDetails.product,
            ingredients: this.state.ingredients
        };
        let orderId = this.props.order ? this.props.order.orderId : null;
        this.props.addOrderItem(orderId, orderItem);
    }

    render() {

        return (
            <div>
                {this.props.productDetails && this.props.productDetails.product
                    ? (
                        <ProductDetailsBody>
                            <ProducDetailsImgContainer>
                                <img src={this.props.productDetails.product.image} alt='' />
                            </ProducDetailsImgContainer>
                            <ProductDetailsInfoContainer>
                                <ProductInfoRow>
                                    <ProductTitle>{this.props.productDetails.product.name}</ProductTitle>
                                    <ProductIngredient>{this.props.productDetails.product.ingredient}</ProductIngredient>
                                </ProductInfoRow>
                                <ProductInfoRow>
                                    <ProductInfoTitle>More ingredients</ProductInfoTitle>
                                    <ProductIngredientContainer>
                                        {this.props.productDetails.ingredients && this.props.productDetails.ingredients.map(ingredient => {
                                            return (<span key={ingredient.ingredientId}
                                                onClick={() => { this.toggleIngredient(ingredient) }}
                                                className={ingredient.isSelected ? 'selected' : ''}>
                                                {ingredient.name}
                                                <small>+{currencyFormat(ingredient.price)}</small>
                                            </span>)
                                        })}
                                    </ProductIngredientContainer>
                                </ProductInfoRow>
                                <ProductInfoRow>
                                    <ProductInfoTitle>Extra instructions</ProductInfoTitle>
                                    <ProductExtraInstTextarea placeholder="e.g. allergies, extra spicy, etc." value={this.state.note} onChange={this.onNoteChange} />
                                </ProductInfoRow>
                                <ProductInfoRow>
                                    <ProductPriceContainer>
                                        <ProductPriceSpan>{currencyFormat(this.state.price !== 0 ? this.state.price : this.props.productDetails.product.price)}</ProductPriceSpan>
                                        <QuantityInput minValue="1" state={this.state} onChange={this.onQuantityChange} />
                                    </ProductPriceContainer>
                                    <ProductPlaceOrderBtn onClick={() => this.onAddToCartClick()}>Add to cart</ProductPlaceOrderBtn>
                                </ProductInfoRow>

                            </ProductDetailsInfoContainer>
                        </ProductDetailsBody>
                    )

                    : (
                        <div>Not found</div>
                    )}
            </div>
        );
    };
};

ProductDetails.propTypes = {
    productDetails: PropTypes.object,
    order: PropTypes.object,
    loadProducts: PropTypes.func,
    addOrderItem: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        productDetails: state.product.productDetails,
        order: state.order.order
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadProductDetails: (productId) => { dispatch(loadProductDetails(productId)) },
        addOrderItem: (orderId, orderItem) => { dispatch(addOrderItem(orderId, orderItem)) }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);