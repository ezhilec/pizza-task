import React from 'react';
import {connect} from 'react-redux';
import {updateCart} from '../actions/CartActions';
import {Cart} from '../components/Cart'

class CartContainer extends React.Component {
    render() {
        const {list, isLoading, error} = this.props.cart;
        return (
            <Cart
                updateCart={this.props.updateCart}
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
        updateCart: (productId, amount) => dispatch(updateCart(productId, amount)),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartContainer);
