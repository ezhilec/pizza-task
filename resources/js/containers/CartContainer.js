import React from 'react';
import {connect} from 'react-redux';
import {updateCart} from '../actions/CartActions';
import {Cart} from '../components/Cart';
import {convertCurrency} from "../helpers/convertCurrency";

class CartContainer extends React.Component {
    render() {
        const {list, isLoading, error} = this.props.cart;

        return (
            <Cart
                updateCart={this.props.updateCart}
                cartItems={list}
                isLoading={isLoading}
                error={error}
                currencies={this.props.currencies}
                currentCurrency={this.props.currentCurrency}
                cartCount={this.props.cartCount}
                cartPrice={this.props.cartPrice}
            />
        )
    }
}

const mapStateToProps = store => {
    const cartCount = store.cart.list.reduce((acc, item) => {
        return acc + item.amount;
    }, 0);

    const cartPrice = store.cart.list.reduce((acc, item) => {
        const convertedPrice = convertCurrency(
            item.price * item.amount,
            store.currency.list,
            item.currency,
            store.currency.currentCurrency
        );

        return acc + convertedPrice;
    }, 0);

    return {
        cart: store.cart,
        currencies: store.currency.list,
        currentCurrency: store.currency.currentCurrency,
        cartCount,
        cartPrice
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
