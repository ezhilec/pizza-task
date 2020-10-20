import React from 'react';
import {connect} from 'react-redux';
import {getCart} from '../actions/CartActions';
import {Cart} from '../components/Cart'

class ProductsContainer extends React.Component {
    render() {
        const {list, isLoading, error} = this.props.cart;
        return (
            <Cart
                getCart={this.props.getCart}
                cartItems={list}
                isLoading={isLoading}
                error={error}
            />
        )
    }
}

const mapStateToProps = store => {
    return {
        cart: store.cart,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getCart: () => dispatch(getCart()),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductsContainer);
