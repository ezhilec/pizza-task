import React from 'react';
import {connect} from 'react-redux';
import {Products} from '../components/Products';
import {getProducts} from '../actions/ProductsActions';
import {updateCart} from '../actions/CartActions';

class ProductsContainer extends React.Component {
    render() {
        const {list, count, isLoading, error} = this.props.products;
        return (
            <Products
                products={list}
                count={count}
                isLoading={isLoading}
                error={error}
                getProducts={this.props.getProducts}
                updateCart={this.props.updateCart}
                cartProducts={this.cartProducts}
            />
        )
    }
}

const mapStateToProps = store => {
    return {
        product: store.product,
        cartProducts: store.cart.list
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getProduct: (productId) => dispatch(getProduct(productId)),
        updateCart: (productId, amount, plus) => dispatch(updateCart(productId, amount, plus)),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductsContainer);
