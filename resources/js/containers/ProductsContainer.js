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
            />
        )
    }
}

const mapStateToProps = store => {
    return {
        products: store.products,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getProducts: () => dispatch(getProducts()),
        updateCart: (productId, amount) => dispatch(updateCart(productId, amount)),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductsContainer);
