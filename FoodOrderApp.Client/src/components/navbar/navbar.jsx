import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { loadCategories, categoryChange } from '../../actions/productActions';
import { NavbarList, NavbarListItem, CategoryTitle, CategoryName } from '../styles/style';

export class Navbar extends Component {
    componentDidMount() {
        this.props.loadCategories();
    }

    handleMenuClick(category) {
        this.props.categoryChange(category);
    }

    render() {
        return (
            <div>
                <CategoryTitle>Categories</CategoryTitle>
                <NavbarList>
                    {this.props.categories && this.props.categories.map(category => {
                        return (
                            <NavbarListItem
                                key={category.categoryId}
                                className={category.categoryId === this.props.selectedCategory.categoryId ? 'active' : ''}
                                onClick={() => this.handleMenuClick(category)}>
                                <CategoryName>{category.name}</CategoryName>
                            </NavbarListItem>
                        )
                    })}
                </NavbarList>
            </div>
        );
    };
};

Navbar.propTypes = {
    categories: PropTypes.array,
    selectedCategory: PropTypes.object,
    loadCategories: PropTypes.func,
    categoryChange: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        categories: state.product.categories,
        selectedCategory: state.product.selectedCategory
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadCategories: () => { dispatch(loadCategories()) },
        categoryChange: (category) => { dispatch(categoryChange(category)) }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);