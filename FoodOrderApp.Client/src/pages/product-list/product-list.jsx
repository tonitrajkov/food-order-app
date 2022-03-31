import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { loadProducts } from '../../actions/productActions';
import ProductItem from './components/product-item';

import { ProductsBody, PageTitle } from '../../components/styles/style';

export class ProductList extends Component {
    componentDidMount() {
        this.getProducts();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.selectedCategory.categoryId !== this.props.selectedCategory.categoryId) {
            this.getProducts();
        }
    }

    onProductClick = (product) => {
        this.props.history.push(`/details/${product.productId}`);
    }

    getProducts = () => {
        if (this.props.selectedCategory.categoryId) {
            this.props.loadProducts(this.props.selectedCategory.categoryId);
        }
    }

    render() {
        return (
            <div>
                <PageTitle>{this.props.selectedCategory.name}</PageTitle>
                <ProductsBody>
                    {this.props.products && this.props.products.map(product => {
                        return (
                            <ProductItem key={product.productId} product={product} onClick={this.onProductClick} />
                        )
                    })}
                </ProductsBody>
            </div>
        );
    };
};

ProductList.propTypes = {
    products: PropTypes.array,
    selectedCategory: PropTypes.object,
    loadProducts: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        products: state.product.products,
        selectedCategory: state.product.selectedCategory
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadProducts: (categoryId) => { dispatch(loadProducts(categoryId)) }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);